const Stripe = require('stripe');

// Guard against a missing key at module load — the Stripe constructor
// throws immediately otherwise, crashing every invocation of this
// function until the STRIPE_SECRET_KEY env var is set in Vercel.
const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

const MIN_AMOUNT_USD = 1;
const MAX_AMOUNT_USD = 100000;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!stripe) {
    console.error('STRIPE_SECRET_KEY is not configured');
    res.status(500).json({ error: 'Payment processor not configured' });
    return;
  }

  const { amount, frequency, name, email } = req.body || {};
  const amountNumber = Number(amount);

  if (!Number.isFinite(amountNumber) || amountNumber < MIN_AMOUNT_USD || amountNumber > MAX_AMOUNT_USD) {
    res.status(400).json({ error: 'Invalid amount' });
    return;
  }
  if (!email) {
    res.status(400).json({ error: 'Missing email' });
    return;
  }

  const isMonthly = frequency === 'monthly';
  const origin = req.headers.origin || 'https://urbanupliftinitiative.org';
  const unitAmountCents = Math.round(amountNumber * 100);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: isMonthly ? 'subscription' : 'payment',
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: isMonthly ? 'Monthly donation to Urban Uplift Initiative' : 'Donation to Urban Uplift Initiative',
            },
            unit_amount: unitAmountCents,
            ...(isMonthly ? { recurring: { interval: 'month' } } : {}),
          },
          quantity: 1,
        },
      ],
      metadata: { donor_name: name || '' },
      success_url: `${origin}/?donation=success#donate`,
      cancel_url: `${origin}/?donation=cancelled#donate`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe session creation failed:', err);
    res.status(502).json({ error: 'Failed to start checkout' });
  }
};

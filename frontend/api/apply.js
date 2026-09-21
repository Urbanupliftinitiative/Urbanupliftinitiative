const { Resend } = require('resend');

const TO_EMAIL = 'UrbanUpliftInitiative@gmail.com';
// Guard against a missing key at module load — the Resend constructor
// throws immediately otherwise, crashing every invocation of this
// function (even ones that would fail validation first) until the
// RESEND_API_KEY env var is set in Vercel.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, age, address, phone, email, notes } = req.body || {};

  if (!name || !age || !address || !phone) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  if (!resend) {
    console.error('RESEND_API_KEY is not configured');
    res.status(500).json({ error: 'Email service not configured' });
    return;
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Urban Uplift Initiative <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: 'CO Alarm Request — Senior Safety Initiative',
      html: `
        <h2>CO Alarm Request — Senior Safety Initiative</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Age</strong></td><td>${escapeHtml(age)}</td></tr>
          <tr><td><strong>Address</strong></td><td>${escapeHtml(address)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email || '(not provided)')}</td></tr>
          <tr><td><strong>Notes</strong></td><td>${escapeHtml(notes || '(none)')}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error('Resend send failed:', error);
      res.status(502).json({ error: 'Failed to send email' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend send threw:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

const { Resend } = require('resend');

// Lowercase deliberately — Resend's sandbox sender only allows sending to
// the account's own address and matches it case-sensitively (see api/apply.js).
const TO_EMAIL = 'urbanupliftinitiative@gmail.com';
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, reason, message } = req.body || {};

  if (!name || !email || !message) {
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
      replyTo: email,
      subject: `Contact form — ${reason || 'General'}`,
      html: `
        <h2>Contact form submission</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>I am a</strong></td><td>${escapeHtml(reason || 'Not specified')}</td></tr>
          <tr><td><strong>Message</strong></td><td>${escapeHtml(message).replace(/\n/g, '<br>')}</td></tr>
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

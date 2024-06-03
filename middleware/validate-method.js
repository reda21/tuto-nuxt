// middleware/validate-method.js
export default function (req, res, next) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
    next();
  }
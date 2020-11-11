module.exports = {
  bucket: {
    slug: process.env.COSMIC_BUCKET,
    read_key: process.env.COSMIC_READ_KEY,
    write_key: process.env.COSMIC_WRITE_KEY
  },
  twilio: {
    auth: process.env.TWILIO_AUTH,
    sid: process.env.TWILIO_SID,
    number: process.env.TWILIO_NUMBER
  },
  bucket2: {
    slug: process.env.COSMIC_BUCKET2,
    read_key: process.env.COSMIC_READ_KEY2,
    write_key: process.env.COSMIC_WRITE_KEY2
  }
}

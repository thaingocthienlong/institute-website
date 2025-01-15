import dbConnect from '@/utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect();
  res.status(200).json({ message: 'Database connected successfully' });
}

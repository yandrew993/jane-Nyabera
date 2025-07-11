import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await prisma.testimonial.findMany({ orderBy: { date: 'desc' } });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    const { name, relationship, testimonial, image, rating, date } = req.body;
    if (!name || !relationship || !testimonial || !rating || !date) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newTestimonial = await prisma.testimonial.create({
      data: { name, relationship, testimonial, image, rating, date },
    });
    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create testimonial' });
  }
};

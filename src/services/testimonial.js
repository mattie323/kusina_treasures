import { config } from "./config";
export const addTestimonial = async (newTestimonial) => {
  const res = await fetch(`${config.API_URL}/testimonials`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTestimonial),
  });

  const data = await res.json();

  return data;
};

export const getTestimonials = async () => {
  const res = await fetch(`${config.API_URL}/testimonials`);
  const data = await res.json();
  return data;
};

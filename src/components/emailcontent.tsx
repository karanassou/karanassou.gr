export interface FormFileds {
  name: string;
  email: string;
  message: string;
}

export function ioannaEmail(name: string, email: string, message: string) {
  return `<p>Όνομα: ${name}</p><br/><a href="mailto:${email}">${email}</a><br/><br/><p>${message}</p>`;
  return;
}

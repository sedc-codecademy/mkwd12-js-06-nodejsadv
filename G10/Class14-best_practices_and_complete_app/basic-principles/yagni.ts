interface User {
  id: number;
  name: string;
  email: string;
  // Additional future properties
  phone?: string;
  address?: string;
  age?: number;
}

function createUser(user: User): void {
  console.log("User Created:", user.name);
  // Future functionality that is not currently needed
  sendWelcomeEmail(user.email);
  verifyEmailAddress(user.email);
  if (user.phone) {
    sendSMSConfirmation(user.phone);
  }
}

// Function implementations (placeholders)
function sendWelcomeEmail(email: string) {
  console.log(`Sending welcome email to ${email}`);
}

function verifyEmailAddress(email: string) {
  console.log(`The folowing email addres ${email} has been confirmed`);
}

function sendSMSConfirmation(phone: string) {
  console.log(`The confirmation email will be sent to ${phone}`);
}

createUser({ id: 1, name: "Bob", email: "bob@example.com" });

// Simplified version
interface User {
  id: number;
  name: string;
  email: string;
}

function createUserSimplified(user: User): void {
  console.log("User Created:", user.name);
}

createUserSimplified({ id: 1, name: "Alice", email: "alice@example.com" });

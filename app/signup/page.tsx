'use client';

import { FormEvent, useMemo, useState } from 'react';

const onboardingQuestions = [
  'What is the name of your business or idea?',
  'What do you sell or plan to sell?',
  'Who is the ideal customer?',
  'What problem does your customer need solved first?',
  'What makes your offer different or better?',
  'Do you need a website, Shopify store, client portal, automation system, or full OS?',
  'What tools do you already use today?',
  'What parts of the business waste the most time right now?',
  'What should the first version be able to do?',
  'What style or brands do you like?',
  'What budget or launch range should we plan around?',
  'What deadline or important date should we know?',
];

const emptyAnswers = onboardingQuestions.reduce<Record<string, string>>((acc, question) => {
  acc[question] = '';
  return acc;
}, {});

export default function SignupPage() {
  const [status, setStatus] = useState('Ready for intake');
  const [contact, setContact] = useState({ name: '', email: '', phone: '', preferred: 'Email' });
  const [answers, setAnswers] = useState(emptyAnswers);

  const messageBody = useMemo(() => {
    const lines = [
      'Strategic Minds Advisory Intake',
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Phone: ${contact.phone}`,
      `Preferred Contact: ${contact.preferred}`,
      '',
      ...onboardingQuestions.map((question) => `${question}\n${answers[question] || '[not answered]'}`),
    ];
    return lines.join('\n\n');
  }, [answers, contact]);

  const encodedMessage = encodeURIComponent(messageBody);

  async function submitIntake(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Creating preview handoff...');

    const response = await fetch('/api/intake', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ contact, answers }),
    });
    const result = await response.json();
    setStatus(result.message ?? 'Intake captured in preview mode.');
  }

  return (
    <main className="intake-page">
      <header className="simple-header">
        <a className="brand-lockup" href="/" aria-label="Strategic Minds Advisory home">
          <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
        </a>
        <a className="button secondary" href="/client">Client Dashboard</a>
      </header>

      <section className="intake-hero">
        <div>
          <p className="eyebrow">Start your build</p>
          <h1>Tell us what to build.</h1>
          <p>The answers below create your client file, then route to the Business Builder Strategist, Discovery Agent, Branding Agent, and Auto Social planning lane.</p>
        </div>
        <div className="intake-status">
          <small>Status</small>
          <strong>{status}</strong>
          <span>No payment, text, email, build, or live client action happens without approval.</span>
        </div>
      </section>

      <form className="intake-form" onSubmit={submitIntake}>
        <section className="form-section">
          <h2>Contact Information</h2>
          <div className="form-grid">
            <label>Full name<input required value={contact.name} onChange={(event) => setContact({ ...contact, name: event.target.value })} /></label>
            <label>Email<input required type="email" value={contact.email} onChange={(event) => setContact({ ...contact, email: event.target.value })} /></label>
            <label>Phone<input value={contact.phone} onChange={(event) => setContact({ ...contact, phone: event.target.value })} /></label>
            <label>Preferred contact<select value={contact.preferred} onChange={(event) => setContact({ ...contact, preferred: event.target.value })}><option>Email</option><option>Text</option><option>Phone Call</option></select></label>
          </div>
        </section>

        <section className="form-section">
          <h2>Onboarding Questions</h2>
          <p className="muted-copy">This template starts with 12 questions. We can tune the final 10-15 questions after the workflow is locked.</p>
          <div className="question-stack">
            {onboardingQuestions.map((question, index) => (
              <label key={question}>
                <span>{index + 1}. {question}</span>
                <textarea value={answers[question]} onChange={(event) => setAnswers({ ...answers, [question]: event.target.value })} rows={3} />
              </label>
            ))}
          </div>
        </section>

        <section className="handoff-panel">
          <div>
            <h2>Send Intake Another Way</h2>
            <p>Email or text the same questions when a client does not want to use the portal form.</p>
          </div>
          <div className="handoff-actions">
            <a className="button secondary" href={`mailto:strategicmindsadvisory@gmail.com?subject=Strategic Minds Intake&body=${encodedMessage}`}>Email Intake</a>
            <a className="button secondary" href={`sms:?&body=${encodedMessage}`}>Text Intake</a>
            <button className="button primary" type="submit">Create Handoff</button>
          </div>
        </section>
      </form>
    </main>
  );
}

'use client';

import { FormEvent, useMemo, useState } from 'react';
import styles from './client-dashboard.module.css';

const tabs = ['Journey', 'Payments', 'Documents', 'Messages', 'Settings'];

const journey = [
  {
    title: 'Choose Your Package',
    short: 'Package',
    detail: 'Pick the package that matches your goals, budget, and timeline.',
    gate: 'Package selected',
    owner: 'Client'
  },
  {
    title: 'Secure Payment',
    short: 'Payment',
    detail: 'Complete the first payment through the secure Stripe checkout path.',
    gate: 'Payment confirmed',
    owner: 'Client'
  },
  {
    title: 'Schedule Your Call',
    short: 'Call',
    detail: 'Choose the strategy call time that works best for your business.',
    gate: 'Call scheduled',
    owner: 'Client'
  },
  {
    title: 'Share Your Idea',
    short: 'Idea',
    detail: 'Tell us what you want to build, automate, improve, or launch.',
    gate: 'Brief submitted',
    owner: 'Client'
  },
  {
    title: 'We Plan Your System',
    short: 'Plan',
    detail: 'We turn your idea into a clear build plan, milestones, and approval path.',
    gate: 'Plan approved',
    owner: 'Strategic Minds'
  },
  {
    title: 'MVP Development',
    short: 'MVP',
    detail: 'We build the first usable version of the website, workflow, or automation.',
    gate: 'MVP ready',
    owner: 'Strategic Minds'
  },
  {
    title: 'Review & Feedback',
    short: 'Review',
    detail: 'You review the preview, request changes, and approve the next release gate.',
    gate: 'Feedback approved',
    owner: 'Client'
  },
  {
    title: 'Launch Your System',
    short: 'Launch',
    detail: 'We launch only after the preview, payment, and approval gates are clear.',
    gate: 'Launch approved',
    owner: 'Strategic Minds'
  },
  {
    title: 'Automated Updates',
    short: 'Updates',
    detail: 'Your system moves into maintenance, improvements, and release receipts.',
    gate: 'Update lane active',
    owner: 'Strategic Minds'
  },
  {
    title: 'Scale & Optimize',
    short: 'Scale',
    detail: 'We improve what works, cut what does not, and scale the highest-value pieces.',
    gate: 'Scale plan approved',
    owner: 'Joint'
  }
];

const documents = [
  ['Project Brief', 'Ready'],
  ['Strategy Blueprint', 'Gate 5'],
  ['MVP Roadmap', 'Gate 6'],
  ['Launch Checklist', 'Gate 8']
];

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('Journey');
  const [currentStep, setCurrentStep] = useState(4);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(['Welcome. Your gated AI build journey is ready for review.']);
  const [toast, setToast] = useState('Client journey active. Production launch and payment capture remain gated.');

  const currentGate = journey[currentStep - 1];
  const nextGate = journey[currentStep] ?? journey[journey.length - 1];
  const progress = useMemo(() => Math.round((currentStep / journey.length) * 100), [currentStep]);

  function viewGate(step: number) {
    setCurrentStep(step);
    setToast(`Viewing gate ${step}: ${journey[step - 1].title}.`);
  }

  function advanceGate() {
    if (currentStep >= journey.length) {
      setToast('All gates are complete. Scale and optimization is the active lane.');
      return;
    }
    setCurrentStep((step) => step + 1);
    setToast(`Gate approved. Moving to ${journey[currentStep].title}.`);
  }

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanMessage = message.trim();
    if (!cleanMessage) {
      setToast('Type a short message first.');
      return;
    }
    setMessages((current) => [cleanMessage, ...current]);
    setMessage('');
    setToast('Message added to your project notes.');
  }

  function bookCall() {
    window.location.href = 'mailto:strategicmindsadvisory@gmail.com?subject=Book%20my%20AI%20build%20review%20call';
  }

  function downloadChecklist() {
    const checklist = [
      'Strategic Minds Gated AI Build Journey',
      '',
      ...journey.map((step, index) => `${index + 1}. ${step.title} - ${index + 1 < currentStep ? 'Complete' : index + 1 === currentStep ? 'Current' : 'Locked'} - ${step.gate}`),
      '',
      'Next step: complete the current gate before the next phase opens.'
    ].join('\n');
    const blob = new Blob([checklist], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'strategic-minds-gated-journey.txt';
    link.click();
    URL.revokeObjectURL(url);
    setToast('Gated journey checklist downloaded.');
  }

  return (
    <main className={`app-shell ${styles.shell}`}>
      <nav className="app-nav">
        <a className="brand" href="/">
          Strategic Minds Advisory
          <span>Client Journey</span>
        </a>
        <div className="nav-links app-nav-links">
          <a href="/">Website</a>
          <a href="/payment">Payment</a>
          <a href="/auth">Sign In</a>
          <button type="button" onClick={downloadChecklist}>Checklist</button>
          <button className="btn primary" type="button" onClick={bookCall}>Book Call</button>
        </div>
      </nav>

      <div className="app-layout">
        <aside className="side-nav" aria-label="Client navigation">
          {tabs.map((tab) => (
            <button className={activeTab === tab ? 'active' : ''} type="button" key={tab} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </aside>

        <section className="workspace">
          <header className="workspace-header">
            <div>
              <span className="eyebrow">10-step gated process</span>
              <h1>{activeTab === 'Journey' ? 'Your AI Build Journey' : activeTab}</h1>
              <p className="muted">Move from package selection to payment, planning, build, approval, launch, updates, and scale.</p>
            </div>
            <div className="action-row">
              <a className="btn dark" href="/payment">Secure Payment</a>
              <button className="btn primary" type="button" onClick={advanceGate}>Approve Current Gate</button>
            </div>
          </header>

          <div className="notice-bar">{toast}</div>

          <div className="status-row">
            <div className="dashboard-panel">
              <span className="badge blue">Current gate</span>
              <h2>{currentStep} of 10</h2>
              <span className="muted">{currentGate.title}</span>
            </div>
            <div className="dashboard-panel">
              <span className="badge amber">Next gate</span>
              <h2>{nextGate.short}</h2>
              <span className="muted">{nextGate.gate}</span>
            </div>
            <div className="dashboard-panel">
              <span className="badge green">Progress</span>
              <h2>{progress}%</h2>
              <span className="muted">Journey readiness</span>
            </div>
            <div className="dashboard-panel">
              <span className="badge blue">Protected</span>
              <h2>Gated</h2>
              <span className="muted">Launch waits for approval</span>
            </div>
          </div>

          <section className={styles.journeyPanel} aria-label="Ten step client journey">
            <div className="row-between">
              <div>
                <span className="eyebrow">Timeline</span>
                <h2>The 10 Step Client Journey</h2>
              </div>
              <span className="badge blue">{currentGate.gate}</span>
            </div>
            <div className={styles.journeyMap}>
              {journey.map((step, index) => {
                const stepNumber = index + 1;
                const state = stepNumber < currentStep ? 'done' : stepNumber === currentStep ? 'active' : 'locked';
                return (
                  <button className={`${styles.journeyStep} ${styles[state]}`} type="button" key={step.title} onClick={() => viewGate(stepNumber)}>
                    <span>{stepNumber}</span>
                    <strong>{step.short}</strong>
                    <small>{state === 'done' ? 'Complete' : state === 'active' ? 'Current' : 'Locked'}</small>
                  </button>
                );
              })}
            </div>
          </section>

          <div className="main-grid">
            <div className={`client-tile ${styles.gateDetail}`}>
              <span className="badge blue">Gate {currentStep}</span>
              <h2>{currentGate.title}</h2>
              <p className="muted">{currentGate.detail}</p>
              <div className={styles.gateFacts}>
                <div>
                  <strong>Required gate</strong>
                  <span>{currentGate.gate}</span>
                </div>
                <div>
                  <strong>Owner</strong>
                  <span>{currentGate.owner}</span>
                </div>
                <div>
                  <strong>Next unlock</strong>
                  <span>{nextGate.title}</span>
                </div>
              </div>
              <div className="action-row">
                <button className="btn primary" type="button" onClick={advanceGate}>Approve Current Gate</button>
                <button className="btn dark" type="button" onClick={bookCall}>Ask a Question</button>
              </div>
            </div>

            <div className="client-tile">
              <h2>Gate Actions</h2>
              <div className="queue">
                <a className="queue-action" href="/payment">Go to secure payment</a>
                <a className="queue-action" href="/auth">Sign in with Supabase Auth</a>
                <button className="queue-action" type="button" onClick={bookCall}>Schedule strategy call</button>
                <button className="queue-action" type="button" onClick={downloadChecklist}>Download journey checklist</button>
              </div>
            </div>
          </div>

          <div className="client-grid">
            <div className="client-tile">
              <h2>Documents</h2>
              <div className="document-list">
                {documents.map(([title, status]) => (
                  <div key={title}>
                    <strong>{title}</strong>
                    <span className={status === 'Ready' ? 'badge green' : 'badge amber'}>{status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="client-tile">
              <h2>Project Messages</h2>
              <form className="message-form" onSubmit={sendMessage}>
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask a question or leave a note for this gate." />
                <button className="btn primary" type="submit">Add Message</button>
              </form>
              <div className="message-list">
                {messages.map((item, index) => (
                  <p key={`${item}-${index}`}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

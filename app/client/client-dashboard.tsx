'use client';

import { FormEvent, useMemo, useState } from 'react';

const tabs = ['Overview', 'Progress', 'Documents', 'Meetings', 'Requests', 'Messages', 'Settings'];

const startingTasks = [
  { title: 'Approve homepage direction', detail: 'Confirm the message and offer are correct.', done: true },
  { title: 'Upload brand assets', detail: 'Logo, photos, colors, and any examples you like.', done: false },
  { title: 'Confirm main offer', detail: 'Pick the package or service you want the site to sell first.', done: false },
  { title: 'Schedule build review', detail: 'Book a short call to approve the next version.', done: false }
];

const docs = [
  ['Website Plan', 'Ready'],
  ['Launch Checklist', 'Ready'],
  ['Content Outline', 'Draft'],
  ['Automation Map', 'Draft']
];

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [tasks, setTasks] = useState(startingTasks);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(['Welcome. Your project workspace is ready for review.']);
  const [toast, setToast] = useState('Preview account active. No payments or launch actions run from this demo.');

  const progress = useMemo(() => Math.round((tasks.filter((task) => task.done).length / tasks.length) * 100), [tasks]);

  function toggleTask(index: number) {
    setTasks((current) => current.map((task, taskIndex) => taskIndex === index ? { ...task, done: !task.done } : task));
    setToast('Task status updated.');
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
    window.location.href = 'mailto:strategicmindsadvisory@gmail.com?subject=Book%20my%20website%20review%20call';
  }

  function sendRequest() {
    window.location.href = 'mailto:strategicmindsadvisory@gmail.com?subject=Client%20dashboard%20request';
  }

  function downloadChecklist() {
    const checklist = [
      'Strategic Minds Launch Checklist',
      '',
      ...tasks.map((task) => `${task.done ? '[x]' : '[ ]'} ${task.title} - ${task.detail}`),
      '',
      'Next step: approve the website preview before production launch.'
    ].join('\n');
    const blob = new Blob([checklist], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'strategic-minds-launch-checklist.txt';
    link.click();
    URL.revokeObjectURL(url);
    setToast('Launch checklist downloaded.');
  }

  return (
    <main className="app-shell">
      <nav className="app-nav">
        <a className="brand" href="/">
          Strategic Minds Advisory
          <span>Client Dashboard</span>
        </a>
        <div className="nav-links app-nav-links">
          <a href="/">Website</a>
          <button type="button" onClick={sendRequest}>Send Request</button>
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
              <span className="eyebrow">Your website project</span>
              <h1>{activeTab === 'Overview' ? 'Your Build Dashboard' : activeTab}</h1>
              <p className="muted">See what is done, what needs your approval, and what happens next.</p>
            </div>
            <div className="action-row">
              <button className="btn dark" type="button" onClick={downloadChecklist}>Download Checklist</button>
              <button className="btn primary" type="button" onClick={bookCall}>Book Review Call</button>
            </div>
          </header>

          <div className="notice-bar">{toast}</div>

          <div className="status-row">
            <div className="dashboard-panel"><span className="badge green">Active</span><h2>Website Funnel</h2><span className="muted">Current build</span></div>
            <div className="dashboard-panel"><span className="badge amber">Needs input</span><h2>{tasks.filter((task) => !task.done).length}</h2><span className="muted">Open client tasks</span></div>
            <div className="dashboard-panel"><span className="badge green">{progress}%</span><h2>Progress</h2><span className="muted">Preview readiness</span></div>
            <div className="dashboard-panel"><span className="badge blue">Ready</span><h2>PWA</h2><span className="muted">Installable app setup</span></div>
          </div>

          <div className="main-grid">
            <div className="client-tile" id="progress">
              <div className="row-between">
                <h2>Project Progress</h2>
                <span className="badge green">{progress}% complete</span>
              </div>
              <div className="progress" aria-label={`${progress} percent complete`}>
                <span style={{ width: `${progress}%` }} />
              </div>
              <div className="task-list">
                {tasks.map((task, index) => (
                  <div className="task-item" key={task.title}>
                    <div>
                      <strong>{task.title}</strong>
                      <p className="muted">{task.detail}</p>
                    </div>
                    <button className={task.done ? 'small-action done' : 'small-action'} type="button" onClick={() => toggleTask(index)}>
                      {task.done ? 'Done' : 'Mark Done'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="client-tile" id="requests">
              <h2>Quick Actions</h2>
              <div className="queue">
                <button className="queue-action" type="button" onClick={() => setToast('Brand asset request opened. Send files by replying to the project email.')}>
                  Upload brand assets
                </button>
                <button className="queue-action" type="button" onClick={() => setToast('Offer confirmation saved in this preview.')}>
                  Confirm main offer
                </button>
                <button className="queue-action" type="button" onClick={bookCall}>
                  Schedule build review
                </button>
                <button className="queue-action" type="button" onClick={downloadChecklist}>
                  Download launch checklist
                </button>
              </div>
            </div>
          </div>

          <div className="client-grid">
            <div className="client-tile" id="documents">
              <h2>Documents</h2>
              <div className="document-list">
                {docs.map(([title, status]) => (
                  <div key={title}>
                    <strong>{title}</strong>
                    <span className={status === 'Ready' ? 'badge green' : 'badge amber'}>{status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="client-tile" id="messages">
              <h2>Project Messages</h2>
              <form className="message-form" onSubmit={sendMessage}>
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask a question or leave a note for the build team." />
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

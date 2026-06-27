'use client';

import { useMemo, useState } from 'react';
import styles from './admin-console.module.css';

const tabs = ['Overview', 'Journey', 'Payments', 'Approvals', 'Receipts', 'Release'];

const startingQueue = [
  { title: 'Choose package', area: 'Gate 1', priority: 'High', status: 'Approved' },
  { title: 'Secure payment', area: 'Gate 2', priority: 'High', status: 'Waiting' },
  { title: 'Schedule strategy call', area: 'Gate 3', priority: 'Medium', status: 'Waiting' },
  { title: 'Collect client idea brief', area: 'Gate 4', priority: 'Medium', status: 'Waiting' },
  { title: 'Approve system plan', area: 'Gate 5', priority: 'High', status: 'Waiting' },
  { title: 'Build MVP preview', area: 'Gate 6', priority: 'High', status: 'Waiting' },
  { title: 'Review feedback', area: 'Gate 7', priority: 'Medium', status: 'Waiting' },
  { title: 'Approve launch', area: 'Gate 8', priority: 'High', status: 'Waiting' },
  { title: 'Start automated updates', area: 'Gate 9', priority: 'Medium', status: 'Waiting' },
  { title: 'Scale and optimize', area: 'Gate 10', priority: 'Medium', status: 'Waiting' }
];

const projects = [
  ['Package Selection', 'Client', 'Approved', '100%'],
  ['Payment Gate', 'Stripe', 'Waiting', '25%'],
  ['Strategy Call', 'Client', 'Waiting', '20%'],
  ['Build Plan', 'Strategic Minds', 'Queued', '10%']
];

export default function AdminConsole() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [queue, setQueue] = useState(startingQueue);
  const [receipts, setReceipts] = useState(['Preview deployment checked', 'Hero image replaced', 'Gated journey installed']);
  const [toast, setToast] = useState('Operator preview active. Payment, auth, and production launch still require configured credentials and approval.');

  const approvedCount = useMemo(() => queue.filter((item) => item.status === 'Approved').length, [queue]);
  const releaseReadiness = Math.round(((approvedCount + receipts.length) / (queue.length + 4)) * 100);

  function updateQueue(index: number, status: string) {
    setQueue((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, status } : item));
    setToast(`Approval item marked ${status.toLowerCase()}.`);
  }

  function createReceipt() {
    const receipt = `Operator receipt ${receipts.length + 1}: ${new Date().toLocaleString()}`;
    setReceipts((current) => [receipt, ...current]);
    setToast('Preview receipt created.');
  }

  async function copySummary() {
    const summary = `Strategic Minds preview status: ${releaseReadiness}% ready, ${approvedCount}/${queue.length} approval items approved, ${receipts.length} receipts recorded.`;
    try {
      await navigator.clipboard.writeText(summary);
      setToast('Summary copied to clipboard.');
    } catch {
      setToast(summary);
    }
  }

  function sendUpdate() {
    window.location.href = 'mailto:strategicmindsadvisory@gmail.com?subject=Strategic%20Minds%20operator%20update';
  }

  return (
    <main className={`app-shell ${styles.shell}`}>
      <nav className="app-nav">
        <a className="brand" href="/">
          Strategic Minds Advisory
          <span>Gate Console</span>
        </a>
        <div className="nav-links app-nav-links">
          <a href="/">Website</a>
          <a href="/client">Client View</a>
          <a href="/payment">Payment</a>
          <a href="/auth">Auth</a>
          <button type="button" onClick={copySummary}>Copy Summary</button>
          <button className="btn primary" type="button" onClick={sendUpdate}>Send Update</button>
        </div>
      </nav>

      <div className="app-layout">
        <aside className="side-nav" aria-label="Admin navigation">
          {tabs.map((tab) => (
            <button className={activeTab === tab ? 'active' : ''} type="button" key={tab} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </aside>

        <section className="workspace">
          <header className="workspace-header">
            <div>
              <span className="eyebrow">Operator workspace</span>
              <h1>{activeTab === 'Overview' ? 'Gated Launch Console' : activeTab}</h1>
              <p className="muted">Track the 10-step client journey, payment gate, auth gate, build approvals, receipts, and release blockers.</p>
            </div>
            <div className="action-row">
              <button className="btn dark" type="button" onClick={createReceipt}>Create Receipt</button>
              <button className="btn primary" type="button" onClick={copySummary}>Copy Summary</button>
            </div>
          </header>

          <div className="notice-bar">{toast}</div>

          <div className="status-row">
            <div className="dashboard-panel"><span className="badge green">Preview</span><h2>{releaseReadiness}%</h2><span className="muted">Gate readiness</span></div>
            <div className="dashboard-panel"><span className="badge amber">Waiting</span><h2>{queue.filter((item) => item.status === 'Waiting').length}</h2><span className="muted">Open approvals</span></div>
            <div className="dashboard-panel"><span className="badge blue">Recorded</span><h2>{receipts.length}</h2><span className="muted">Preview receipts</span></div>
            <div className="dashboard-panel"><span className="badge blue">Ready</span><h2>PWA</h2><span className="muted">Install support</span></div>
          </div>

          <div className="main-grid">
            <div className="data-table">
              <div className="table-row header">
                <span>Gate</span>
                <span>Owner</span>
                <span>Status</span>
                <span>Progress</span>
              </div>
              {projects.map(([project, owner, status, progress]) => (
                <div className="table-row" key={project}>
                  <strong>{project}</strong>
                  <span>{owner}</span>
                  <span className="badge green">{status}</span>
                  <div>
                    <strong>{progress}</strong>
                    <div className="progress" aria-label={`${progress} complete`}>
                      <span style={{ width: progress }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="dashboard-panel">
              <div className="row-between">
                <h2>Approval Queue</h2>
                <span className="badge amber">{queue.filter((item) => item.status === 'Waiting').length} waiting</span>
              </div>
              <div className="queue">
                {queue.map((item, index) => (
                  <div className="queue-item" key={item.title}>
                    <div className="row-between">
                      <strong>{item.title}</strong>
                      <span className={item.priority === 'High' ? 'badge red' : 'badge amber'}>{item.priority}</span>
                    </div>
                    <span className="muted">{item.area}</span>
                    <div className="mini-actions">
                      <button type="button" onClick={() => updateQueue(index, 'Approved')}>Approve</button>
                      <button type="button" onClick={() => updateQueue(index, 'Hold')}>Hold</button>
                    </div>
                    <span className={item.status === 'Approved' ? 'badge green' : item.status === 'Hold' ? 'badge red' : 'badge amber'}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="client-grid">
            <div className="client-tile">
              <h2>Receipts</h2>
              <div className="message-list">
                {receipts.map((receipt) => (
                  <p key={receipt}>{receipt}</p>
                ))}
              </div>
            </div>
            <div className="client-tile">
              <h2>Release Gate</h2>
              <p className="muted">Production remains blocked until payment, auth, client approval, and preview approval are configured and cleared. This console does not charge, publish, or mutate live infrastructure by itself.</p>
              <div className="progress" aria-label="release readiness">
                <span style={{ width: `${releaseReadiness}%` }} />
              </div>
              <div className="action-row">
                <button className="btn dark" type="button" onClick={() => setToast('Release is still gated. Ask for explicit production approval before merging.')}>
                  Check Gate
                </button>
                <button className="btn primary" type="button" onClick={sendUpdate}>Send Operator Update</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

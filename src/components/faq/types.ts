export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  faqs: FAQItem[];
}

export type FAQData = FAQCategory[];

// Category labels (UI uses these exact strings)
export const GETTING_STARTED = "Getting Started";
export const SHIFTS_INVOICING = "Shifts & Invoicing";
export const AGREEMENTS_REPORTING = "Service Agreements & Reporting";
export const STAFF = "Managing Staff";
export const BILLING = "Billing & Subscriptions";
export const SETTINGS_SUPPORT = "Settings & Support";

export const FAQ_DATA: FAQData = [
  // 1) GETTING STARTED
  {
    category: GETTING_STARTED,
    faqs: [
      {
        question: "How do I set up my business in Bugal?",
        answer:
          "Click your avatar (top right) → <strong>Business Settings</strong>. Complete business details including <strong>Banking</strong> — these flow into invoices and documents.",
      },
      {
        question: "What happens after my 30‑day free trial ends?",
        answer:
          "You can switch to the <strong>Free</strong> plan (up to 2 invoices/month): Avatar → <strong>Subscriptions</strong> → select <strong>Free</strong>.",
      },
      {
        question: "How do I create a new organisation (e.g., for a new business)?",
        answer:
          "Open the left menu → scroll to the <strong>Business</strong> icon → <strong>New Business</strong>. Then finish setup in <strong>Business Settings</strong>.",
      },
      {
        question: "Can Bugal be used for Support Coordination?",
        answer:
          "Yes. Many Support Coordinators create <strong>time‑block shifts</strong> for their activities, complete them, and invoice by client.",
      },
      {
        question: "Is there a getting‑started video or guide?",
        answer:
          "Yes — you'll receive an intro email with a video. We also have a <strong>Getting Started Guide</strong> and short courses.",
      },
      {
        question: "I'm changing from a sole trader to a company — anything special to do?",
        answer:
          "Pricing is per user (not entity). We recommend creating a <strong>new organisation</strong> for the company to keep tax records clear.",
      },
    ],
  },

  // 2) SHIFTS & INVOICING
  {
    category: SHIFTS_INVOICING,
    faqs: [
      {
        question: "How do I create and send an invoice?",
        answer:
          "1) Mark shifts <strong>Completed</strong> → 2) Go to <strong>Invoices</strong> → choose the client → select shifts and any reclaimable expenses → <strong>Generate</strong> → <strong>Notify</strong> (arrow icon) to send.",
      },
      {
        question: "How do I invoice the plan manager rather than the client?",
        answer:
          "Edit the <strong>Client</strong> → <strong>Who will receive the invoices</strong> → add the Plan Manager's email and role. When sending, select them in the Notify list.",
      },
      {
        question: "How do I mark an invoice as paid?",
        answer:
          "Open the invoice → click <strong>…</strong> → <strong>$</strong> → record the payment method and date. You can record full, partial, or write‑off.",
      },
      {
        question: "I marked an invoice as paid by mistake. How do I undo it?",
        answer:
          "Open the invoice → scroll to the bottom → <strong>Delete the receipt</strong>. Status reverts to <strong>Unpaid</strong>.",
      },
      {
        question: "Why is my paid invoice still showing as overdue on the dashboard?",
        answer:
          "Invoices must be <strong>marked as paid</strong> in Bugal (see above). This ensures the dashboard reflects the correct status.",
      },
      {
        question: "Can I retrieve a deleted invoice?",
        answer:
          "You can <strong>recreate</strong> it. The associated shifts automatically become available again to add to a new invoice.",
      },
      {
        question: "Do NDIS item numbers auto‑populate invoice descriptions?",
        answer:
          "No. Requirements vary across plan managers. Enter what works for your workflow; then <strong>Duplicate</strong> or set <strong>Recurring</strong> to reuse details.",
      },
      {
        question: "Can I include shift notes or client addresses on invoices?",
        answer:
          "Invoices intentionally exclude detailed shift notes and client addresses. Generate a <strong>Shift Report</strong> PDF and send it separately if required.",
      },
      {
        question: "How do I add kilometres (KMs) to an invoice?",
        answer:
          "Add KMs on the <strong>shift</strong> (car icon). When the shift is completed and invoiced, KMs are included automatically.",
      },
      {
        question: "Why aren't my older shifts visible in the list?",
        answer:
          "Clear filters (red dot near <strong>New Shift</strong>), set <strong>Status: Completed</strong>, optionally filter by <strong>Contact</strong>, then click <strong>Load More</strong> at the top for older items.",
      },
      {
        question: "How do I edit a shift that has already been invoiced?",
        answer:
          "Delete any <strong>payment</strong> on the invoice, then <strong>delete the invoice</strong>. Affected shifts will show <strong>Amend</strong> so you can edit, re‑complete, and re‑invoice.",
      },
      {
        question: "Can I backdate shifts?",
        answer:
          "Yes. Set the past <strong>date/time</strong>, confirm <strong>contact</strong>, <strong>category</strong>, and <strong>rate</strong> as needed, then mark <strong>Completed</strong>.",
      },
      {
        question: "Does Bugal support clock‑in/clock‑out?",
        answer:
          "Not currently. Adjust start/end to the nearest <strong>15 minutes</strong> before completing the shift.",
      },
    ],
  },

  // 3) SERVICE AGREEMENTS & REPORTING
  {
    category: AGREEMENTS_REPORTING,
    faqs: [
      {
        question: "Can I issue quotes in Bugal?",
        answer:
          "Not yet. Most users create a <strong>Service Agreement</strong> with a cost breakdown. Quoting is on our roadmap.",
      },
      {
        question: "Can I create separate agreements for services like STA?",
        answer:
          "Yes. Create additional Service Agreements with specific schedules, inclusions, and pricing for each service.",
      },
      {
        question: "How do I upload a signed Service Agreement?",
        answer:
          "Open the Service Agreement (in <strong>Draft</strong>) → click <strong>Complete</strong> → upload the signed PDF.",
      },
      {
        question: "Can I change the Service Agreement cancellation policy?",
        answer:
          "In‑app wording follows NDIS best practice and can't be edited. You can amend a <strong>PDF copy</strong> externally, then upload the signed version.",
      },
      {
        question: "How do I generate and share shift notes?",
        answer:
          "Go to <strong>Reports → Shift Reports</strong>, select date range and client, <strong>Generate</strong> and save as <strong>PDF</strong>. Share with clients, plan managers, or support coordinators as needed.",
      },
      {
        question: "Is there incident reporting?",
        answer:
          "No dedicated module yet. Record incidents in <strong>shift notes</strong> and include them in <strong>Shift Reports</strong> where appropriate.",
      },
    ],
  },

  // 4) MANAGING STAFF
  {
    category: STAFF,
    faqs: [
      {
        question: "How do I add staff?",
        answer:
          "Avatar → <strong>Staff → New</strong>. Assign a role (<strong>Read Only, Junior, Senior, Admin</strong>). They'll receive an email invite.",
      },
      {
        question: "Can staff enter shifts/KMs without seeing my financials?",
        answer:
          "Today, even <strong>Junior</strong> roles can see some business data. Finer‑grained role permissions are in development.",
      },
      {
        question: "My staff saw a referral code prompt — what is it?",
        answer:
          "It's optional. They can leave it blank. If used and they later create a paid business, you get a <strong>referral credit</strong>.",
      },
    ],
  },

  // 5) BILLING & SUBSCRIPTIONS
  {
    category: BILLING,
    faqs: [
      {
        question: "Can I switch between monthly and annual payments?",
        answer:
          "Yes. Avatar → <strong>Subscriptions</strong> → toggle <strong>Monthly/Yearly</strong> and pick your plan.",
      },
      {
        question: "How do I cancel my subscription?",
        answer:
          "We recommend downgrading to <strong>Free</strong> so you keep access to records for tax/audit. Do this under <strong>Subscriptions</strong>.",
      },
      {
        question: "What does \"2 per month\" mean on the Free plan?",
        answer:
          "You can send <strong>up to two invoices per calendar month</strong> on Free.",
      },
      {
        question: "Can I transfer my subscription to a new company?",
        answer:
          "Yes — contact us with the <strong>current</strong> and <strong>new</strong> business details and we'll guide the transfer.",
      },
      {
        question: "I selected Annual by mistake — how do I switch to Monthly?",
        answer:
          "Return to <strong>Subscriptions</strong>, select the <strong>Monthly</strong> plan, and proceed. If you hit issues, contact support.",
      },
      {
        question: "Do I need a new plan when moving from Sole Trader to Company?",
        answer:
          "No price change is needed. For clarity, we recommend a <strong>new organisation</strong> for the Company.",
      },
    ],
  },

  // 6) SETTINGS & SUPPORT
  {
    category: SETTINGS_SUPPORT,
    faqs: [
      {
        question: "How do I change my password?",
        answer:
          "Sign out → click <strong>Forgot your password?</strong> on the sign‑in page → follow the email link.",
      },
      {
        question: "How do I update business name or address on invoices?",
        answer:
          "Go to <strong>Business Settings</strong> → update details. Future invoices will reflect the changes.",
      },
      {
        question: "How do I update banking details on invoices?",
        answer:
          "Avatar → <strong>Business Settings</strong> → <strong>Banking</strong> section → save.",
      },
      {
        question: "I can't sign in — what should I try?",
        answer:
          "Try another browser/device or <strong>Incognito</strong>. Disable extensions or antivirus (e.g., <strong>Norton</strong>) temporarily. No outages? Contact us with details.",
      },
      {
        question: "Desktop invoice issues but mobile works — why?",
        answer:
          "Clear filters (see red dot near <strong>New Shift</strong>), click <strong>Load More</strong>, and confirm <strong>Plan Manager</strong> is set on the client's contact card.",
      },
      {
        question: "Can I import data from other software?",
        answer:
          "No automated import yet, but share your data and we'll assist where possible.",
      },
      {
        question: "Does Bugal integrate with Xero/MYOB or include payroll?",
        answer:
          "No payroll and no direct accounting integrations yet. Many users handle contractors via <strong>supplier invoices</strong> and reconcile with <strong>Shift Reports</strong>.",
      },
      {
        question: "When will estimated income tax show on the dashboard?",
        answer:
          "When recorded <strong>net income</strong> (income minus expenses) exceeds <strong>$18,200</strong>. If you expect it and don't see it, contact us.",
      },
      {
        question: "Can I delete old clients?",
        answer:
          "Not yet. An <strong>archive</strong> feature is planned to hide them from view while retaining history for reporting.",
      },
      {
        question: "Where can I send feature requests?",
        answer:
          "We love feedback. Tell us what would help your workflow and we'll prioritise accordingly.",
      },
    ],
  },
];

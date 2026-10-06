// Ask Fermor curated content. Each entry has an id, topic tag (for filtering
// from the calculator cards), the question as users phrase it, a short answer,
// a longer explanation with the key assumption, a source name + link, and the
// shared disclaimer (pulled from config at render time).

export const ASK_FERMOR = [
  {
    id: "sip-vs-fd",
    topic: "savings",
    question: "Where should I keep my savings — SIP or FD?",
    short:
      "It depends on your timeline and comfort with movement. Fixed deposits keep your money steady; SIPs aim for higher growth over many years but move up and down along the way.",
    explanation:
      "An FD returns a fixed interest rate for a fixed term, so the value at maturity is known in advance. A SIP invests the same amount every month into a market-linked fund, so the outcome is an estimate, not a promise. The 12% figure often used for SIP illustrations is an assumed long-run return, not guaranteed. A common approach: keep 3–6 months of expenses in an FD or savings account for emergencies, and use a SIP only for money you won't need for several years.",
    source: { name: "SEBI Investor Education", link: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognizedFp=yes" },
  },
  {
    id: "emergency-fund",
    topic: "basics",
    question: "How big should my emergency fund be?",
    short:
      "Aim for 3 to 6 months of essential expenses, kept somewhere you can reach quickly without penalty.",
    explanation:
      "An emergency fund covers needs if income stops or a large unexpected cost appears — job loss, medical bills, urgent repairs. Three months is a starting point for people with steady income and few dependants; six months suits freelancers, single-income households, or less stable work. Keep it liquid: a savings account or a short-term FD you can break. It is not investment money, so the goal is access and stability, not growth.",
    source: { name: "RBI Financial Education", link: "https://rbi.org.in/Scripts/FinancialEducation.aspx" },
  },
  {
    id: "old-vs-new-tax",
    topic: "tax",
    question: "Old or new tax regime — which suits me?",
    short:
      "The new regime has lower rates but fewer deductions. The old regime lets you claim deductions (80C, HRA, 80D) but at higher rates. Which is better depends on how much you can actually claim.",
    explanation:
      "From FY 2025-26 the new regime is the default. It offers wider slabs and a higher standard deduction, but removes most exemptions and deductions. The old regime keeps 80C (₹1.5 L), 80D (health insurance), HRA, and others. If your total deductions are large, the old regime can save more; if they're small or zero, the new regime usually wins. The honest way to decide is to compute tax both ways for your actual income — Fermor's tax answers walk through this.",
    source: { name: "Income Tax Department", link: "https://www.incometax.gov.in/iec/foportal/" },
  },
  {
    id: "emi-basics",
    topic: "loan",
    question: "How is my EMI calculated?",
    short:
      "Your EMI splits each month into interest and principal. Early on most of it is interest; over time the principal share grows.",
    explanation:
      "EMI = P × i × (1+i)^N ÷ ((1+i)^N − 1), where P is the loan amount, i is the monthly interest rate, and N is the number of months. A longer tenure lowers the monthly EMI but raises total interest paid. A lower rate or a larger down-payment lowers both. Fermor's EMI calculator shows the monthly payment, total interest, and a year-by-year balance so you can see how slowly the principal drops in the early years.",
    source: { name: "RBI: EMI explained", link: "https://rbi.org.in/Scripts/FAQView.aspx?Id=119" },
  },
  {
    id: "afford-loan",
    topic: "loan",
    question: "Can I afford this loan?",
    short:
      "A common guideline: all your EMIs together should stay under 40% of your monthly take-home income.",
    explanation:
      "Lenders look at the debt-to-income ratio and your credit history. As a self-check, add up every EMI you already pay, add the new one, and divide by your monthly in-hand income. Below 30% is comfortable, 30–40% is a stretch, above 40% is risky — a single income shock can make it hard to keep up. Also check the total interest, not just the monthly figure: a longer tenure feels cheaper per month but costs much more overall.",
    source: { name: "RBI: Responsible borrowing", link: "https://rbi.org.in/Scripts/FinancialEducation.aspx" },
  },
  {
    id: "check-before-investing",
    topic: "basics",
    question: "What should I check before I invest in anything?",
    short:
      "Three things: what it is, what it can lose, and how you get your money back out.",
    explanation:
      "Before investing, ask: (1) What exactly am I buying — a fund, a bond, insurance, a deposit? (2) Can the value fall, and by how much has it fallen before? (3) How do I exit, and is there a lock-in or penalty? Avoid anything where the return is 'guaranteed' and very high — that combination is a common fraud signal. Registered products carry a risk label; read it. If you can't explain the investment to yourself in one sentence, it's worth waiting.",
    source: { name: "SEBI: Before you invest", link: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognizedFp=yes" },
  },
  {
    id: "sip-what-is",
    topic: "savings",
    question: "What exactly is a SIP?",
    short:
      "A SIP is a method, not a product. It invests a fixed amount at regular intervals into a mutual fund, automatically.",
    explanation:
      "SIP stands for Systematic Investment Plan. You commit to investing, say, ₹5,000 every month into a chosen mutual fund. The fund buys units at that month's price — more units when the market is low, fewer when it's high — which averages your purchase cost over time (rupee cost averaging). It suits people who want to invest regularly without trying to time the market. The fund's return still depends on what it holds; the SIP only changes how you enter it.",
    source: { name: "AMFI: SIP basics", link: "https://www.amfiindia.com/investor-corner/knowledge-center/sip.html" },
  },
  {
    id: "fd-what-is",
    topic: "savings",
    question: "How does a fixed deposit work?",
    short:
      "You lend a bank a sum for a fixed term at a fixed rate. You get the money back with interest at maturity, or pay a penalty to break it early.",
    explanation:
      "A fixed deposit (FD) locks your money for a chosen period — 7 days to 10 years — at an interest rate set when you book it. The return is known in advance and the principal is protected up to the deposit-insurance limit (₹5 lakh per bank under DICGC). Breaking the FD before maturity usually means a small penalty on the interest. It suits money you need to keep safe and steady, not money you want to grow fast.",
    source: { name: "DICGC: Deposit insurance", link: "https://www.dicgc.org.in/" },
  },
  {
    id: "compounding",
    topic: "basics",
    question: "What does 'compounding' actually mean?",
    short:
      "You earn returns on your earlier returns, not just on your original money. The effect grows the longer you stay invested.",
    explanation:
      "Compounding is when the return your money earns starts earning its own return. In the first year it's small; in year 15 it's the largest part of your balance. This is why starting early matters more than starting big: ten extra years can add more than doubling your monthly amount would. The SIP calculator's 'growth' figure — the gap between what you invested and the final value — is almost entirely compounding.",
    source: { name: "SEBI: Power of compounding", link: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognizedFp=yes" },
  },
  {
    id: "inflation",
    topic: "basics",
    question: "Why does inflation matter for my savings?",
    short:
      "If your money grows slower than prices rise, you can buy less with it over time even though the number went up.",
    explanation:
      "Inflation is the rate at which prices rise — roughly 4–6% a year in India. If your savings earn 4% and inflation is 5%, you've lost buying power despite the balance growing. The 'real' return is your return minus inflation. This is why very safe, very low-return options can still lose ground over many years, and why long-term money is often given some growth exposure. The goal isn't to chase the highest return, but to stay ahead of prices.",
    source: { name: "RBI: Inflation and you", link: "https://rbi.org.in/Scripts/FinancialEducation.aspx" },
  },
  {
    id: "tax-80c",
    topic: "tax",
    question: "What is Section 80C and how much can it save me?",
    short:
      "Under the old regime, you can reduce taxable income by up to ₹1.5 lakh a year through eligible investments and expenses.",
    explanation:
      "Section 80C (old regime only) lets you deduct up to ₹1.5 lakh from your taxable income each year via PPF, ELSS funds, life insurance premiums, home-loan principal, tuition fees, and others. The saving is your deduction × your top tax rate, not a flat ₹1.5 lakh. So if your top rate is 30%, the maximum 80C saving is about ₹46,800. The new regime removes 80C, so check which regime you're using before claiming.",
    source: { name: "Income Tax: 80C", link: "https://www.incometax.gov.in/iec/foportal/" },
  },
  {
    id: "tax-regime-default",
    topic: "tax",
    question: "Is the new tax regime automatic now?",
    short:
      "From FY 2025-26 the new regime is the default. You can still choose the old regime each year if it saves you more.",
    explanation:
      "The new regime became the default from FY 2023-24 and was made the default again for FY 2025-26 with revised slabs and a higher standard deduction of ₹75,000. If you do nothing, tax is computed under the new regime. But you retain the right to opt for the old regime — and you should compute both, because people with meaningful deductions (HRA, 80C, 80D) can still pay less under the old one.",
    source: { name: "Income Tax Department", link: "https://www.incometax.gov.in/iec/foportal/" },
  },
  {
    id: "asset-allocation",
    topic: "basics",
    question: "What is asset allocation in plain terms?",
    short:
      "Splitting your money across different types — equity, debt, cash — so that no single outcome decides your result.",
    explanation:
      "Asset allocation is the mix between growth assets (equity, which can rise and fall) and stable ones (debt, FDs, cash). A younger person with decades to invest might hold more growth; someone near a goal holds more stable. The mix matters more than the exact fund chosen, because it sets the overall risk. A simple rule of thumb: equity % roughly equals 100 minus your age, though this is a starting point, not a rule.",
    source: { name: "SEBI: Asset allocation", link: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognizedFp=yes" },
  },
  {
    id: "insurance-vs-investment",
    topic: "basics",
    question: "Should I use insurance as an investment?",
    short:
      "Usually no. Insurance and investment solve different problems; mixing them tends to make both worse and more expensive.",
    explanation:
      "Life insurance is for protecting dependants if you die; investments are for growing money. Traditional plans (endowment, money-back, ULIPs) combine the two, but the insurance cover is often too low and the returns are usually lower than separating the goals — a term plan for protection plus a fund for growth. Check the cost, the cover amount, and the surrender value before combining. Term insurance + a separate investment is the structure most independent advisers recommend.",
    source: { name: "IRDAI: Insurance education", link: "https://www.irdai.gov.in/" },
  },
  {
    id: "ppp-basics",
    topic: "policy",
    question: "What is the new pension scheme (NPS) in brief?",
    short:
      "NPS is a long-term, government-backed retirement account that invests across equity and debt, with tax breaks under both regimes.",
    explanation:
      "The National Pension System (NPS) is a voluntary, defined-contribution retirement account regulated by PFRDA. Money is invested in a mix you choose (equity, corporate bonds, government securities) and is locked until age 60. It offers an extra ₹50,000 deduction under 80CCD(1B) in the old regime, and the employer's contribution is deductible in both regimes. At retirement you withdraw part as a lump sum and use the rest to buy an annuity. It suits long-horizon retirement saving, not short-term needs.",
    source: { name: "PFRDA: NPS", link: "https://www.pfrda.org.in/index.php/en/nps" },
  },
];

export const ASK_FERMOR_TOPICS = [
  { id: "savings", label: "Savings & investing" },
  { id: "tax", label: "Tax" },
  { id: "loan", label: "Loans & EMI" },
  { id: "basics", label: "Money basics" },
  { id: "policy", label: "Policy explainers" },
];
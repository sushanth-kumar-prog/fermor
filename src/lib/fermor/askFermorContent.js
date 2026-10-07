// Ask Fermor curated content. Each entry has an id, a topic tag (for filtering
// from the services cards), the question as people actually phrase it, a short
// answer, a longer explanation with the key assumption, and a source name plus
// link. The shared disclaimer is pulled from config at render time.
//
// Style note: no em dashes and no hyphenated words anywhere in this file.
// Numbers that are genuinely ranges are spelled out so the rule holds.

export const ASK_FERMOR = [
  {
    id: "sip-vs-fd",
    topic: "savings",
    question: "Should my savings go in a SIP or an FD?",
    short:
      "It depends on your timeline and how much wobble you can live with. Fixed deposits keep your money steady. SIPs aim for higher growth over many years, on the condition that you ignore the parts where they fall.",
    explanation:
      "An FD returns a fixed interest rate for a fixed term, so the value at maturity is known before you start. A SIP invests the same amount every month into a market fund, so the outcome is an estimate rather than a promise. The 12% figure usually used for SIP illustrations is an assumed long term return, not a guarantee. A reasonable split: hold 3 to 6 months of expenses in an FD or savings account for emergencies, and use a SIP only for money you will not need for years.",
    source: { name: "SEBI Investor Education", link: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognizedFp=yes" },
  },
  {
    id: "emergency-fund",
    topic: "basics",
    question: "How big should my emergency fund be?",
    short:
      "Three to six months of essential expenses, parked somewhere you can reach quickly without paying a penalty for asking.",
    explanation:
      "An emergency fund covers you when income stops or a large unexpected cost arrives, such as job loss, medical bills, or urgent repairs. Three months is a reasonable starting point for people with steady income and few dependants. Six months suits freelancers, households with a single income, or less stable work. Keep it liquid, meaning a savings account or a short term FD you can break if you have to. This is not investment money, so the goal is access and stability rather than growth.",
    source: { name: "RBI Financial Education", link: "https://rbi.org.in/Scripts/FinancialEducation.aspx" },
  },
  {
    id: "old-vs-new-tax",
    topic: "tax",
    question: "Which tax regime suits me, old or new?",
    short:
      "The new regime has lower rates but far fewer deductions. The old regime lets you claim 80C, HRA, and 80D, but at higher rates. Which one wins depends entirely on how much you can actually claim.",
    explanation:
      "From FY 2025-26 the new regime is the default. It offers wider slabs and a higher standard deduction, but removes most exemptions and deductions. The old regime keeps 80C up to ₹1.5 lakh, 80D for health insurance, HRA, and others. If your total deductions are large, the old regime can save you more. If they are small or zero, the new regime usually wins. The only honest way to decide is to compute tax both ways on your actual income.",
    source: { name: "Income Tax Department", link: "https://www.incometax.gov.in/iec/foportal/" },
  },
  {
    id: "emi-basics",
    topic: "loan",
    question: "How is my EMI calculated?",
    short:
      "Each EMI splits into interest and principal. Early on, most of it is interest. Over time the principal share grows, which is the only good news in the schedule.",
    explanation:
      "The formula is EMI = P × i × (1+i)^N ÷ ((1+i)^N − 1), where P is the loan amount, i is the monthly interest rate, and N is the number of months. A longer tenure lowers the monthly EMI but raises the total interest paid. A lower rate or a larger down payment lowers both. Fermor's EMI calculator shows the monthly payment, the total interest, and the balance year by year, so you can see how slowly the principal drops in the early years.",
    source: { name: "RBI: EMI explained", link: "https://rbi.org.in/Scripts/FAQView.aspx?Id=119" },
  },
  {
    id: "afford-loan",
    topic: "loan",
    question: "Can I afford this loan?",
    short:
      "A common guideline: all your EMIs together should stay under 40% of your monthly take home income.",
    explanation:
      "Lenders look at your debt to income ratio and your credit history. As a self check, add up every EMI you already pay, add the new one, and divide by your monthly in hand income. Under 30% is comfortable. Between 30% and 40% is a stretch. Above 40% is risky, because a single income shock makes it hard to keep up. Also check the total interest rather than the monthly figure. A longer tenure feels cheaper each month and costs considerably more overall.",
    source: { name: "RBI: Responsible borrowing", link: "https://rbi.org.in/Scripts/FinancialEducation.aspx" },
  },
  {
    id: "check-before-investing",
    topic: "basics",
    question: "What should I check before I invest in anything?",
    short:
      "Three things: what it is, what it can lose, and how you get your money back out.",
    explanation:
      "Before investing, ask yourself three questions. First, what exactly am I buying, whether that is a fund, a bond, insurance, or a deposit. Second, can the value fall, and by how much has it fallen before. Third, how do you exit, and is there a lock in or a penalty. Avoid anything offering a guaranteed and very high return, because that pairing is a well known fraud signal. Registered products carry a risk label, so read it. If you cannot explain the investment to yourself in one sentence, it is worth waiting.",
    source: { name: "SEBI: Before you invest", link: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognizedFp=yes" },
  },
  {
    id: "sip-what-is",
    topic: "savings",
    question: "What exactly is a SIP?",
    short:
      "A SIP is a method, not a product. It invests a fixed amount at regular intervals into a mutual fund, automatically.",
    explanation:
      "SIP stands for Systematic Investment Plan. You commit to investing, say ₹5,000 every month into a chosen mutual fund. The fund buys units at that month's price, which means more units when the market is low and fewer when it is high. That averages your purchase cost over time, known as rupee cost averaging. It suits people who want to invest regularly without trying to time the market. The return still depends on what the fund holds. The SIP only changes how you enter it.",
    source: { name: "AMFI: SIP basics", link: "https://www.amfiindia.com/investor-corner/knowledge-center/sip.html" },
  },
  {
    id: "fd-what-is",
    topic: "savings",
    question: "How does a fixed deposit work?",
    short:
      "You lend a bank a sum for a fixed term at a fixed rate. You get it back with interest at maturity, or you pay a penalty to break it early.",
    explanation:
      "A fixed deposit locks your money for a chosen period, anywhere from 7 days to 10 years, at an interest rate set when you book it. The return is known in advance, and the principal is protected up to the deposit insurance limit of ₹5 lakh per bank under DICGC. Breaking the FD before maturity usually costs a small penalty on the interest. It suits money you need to keep safe and steady rather than money you want to grow quickly.",
    source: { name: "DICGC: Deposit insurance", link: "https://www.dicgc.org.in/" },
  },
  {
    id: "compounding",
    topic: "basics",
    question: "What does compounding actually mean?",
    short:
      "You earn returns on your earlier returns, not only on the money you started with. The effect grows the longer you stay invested.",
    explanation:
      "Compounding happens when the return your money earns starts earning its own return. In year one it is small. By year fifteen it is the largest part of your balance. This is why starting early beats starting big: ten extra years can add more than doubling your monthly amount would. The growth figure in the SIP calculator, which is the gap between what you put in and the final value, is almost entirely compounding.",
    source: { name: "SEBI: Power of compounding", link: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognizedFp=yes" },
  },
  {
    id: "inflation",
    topic: "basics",
    question: "Why does inflation matter for my savings?",
    short:
      "If your money grows slower than prices rise, you can buy less with it over time even though the number went up.",
    explanation:
      "Inflation is the rate at which prices rise, roughly 4% to 6% a year in India. If your savings earn 4% and inflation is 5%, you have lost buying power despite the balance growing. The real return is your return minus inflation. This is why very safe and very low return options can still lose ground over many years, and why long term money is usually given some exposure to growth. The goal is not to chase the highest return but to stay ahead of prices.",
    source: { name: "RBI: Inflation and you", link: "https://rbi.org.in/Scripts/FinancialEducation.aspx" },
  },
  {
    id: "tax-80c",
    topic: "tax",
    question: "What is Section 80C and how much can it save me?",
    short:
      "Under the old regime you can reduce taxable income by up to ₹1.5 lakh a year through eligible investments and expenses.",
    explanation:
      "Section 80C applies to the old regime only. It lets you deduct up to ₹1.5 lakh from your taxable income each year through PPF, ELSS funds, life insurance premiums, home loan principal, tuition fees, and others. The saving is your deduction multiplied by your top tax rate, not a flat ₹1.5 lakh. If your top rate is 30%, the maximum 80C saving is roughly ₹46,800. The new regime removes 80C, so check which regime you are using before claiming it.",
    source: { name: "Income Tax: 80C", link: "https://www.incometax.gov.in/iec/foportal/" },
  },
  {
    id: "tax-regime-default",
    topic: "tax",
    question: "Is the new tax regime automatic now?",
    short:
      "Since FY 2025-26 it is the default. You can still pick the old regime each year if it leaves you better off.",
    explanation:
      "The new regime became the default from FY 2023-24 and was made the default again for FY 2025-26, with revised slabs and a higher standard deduction of ₹75,000. If you do nothing, tax is computed under the new regime. You still retain the right to choose the old one, and you should compare both, because people with meaningful deductions under HRA, 80C, and 80D can still pay less under the old regime.",
    source: { name: "Income Tax Department", link: "https://www.incometax.gov.in/iec/foportal/" },
  },
  {
    id: "asset-allocation",
    topic: "basics",
    question: "What is asset allocation in plain terms?",
    short:
      "Spreading your money across equity, debt, and cash, so that no single outcome decides your result.",
    explanation:
      "Asset allocation is the mix between growth assets such as equity, which can rise and fall, and stable assets such as debt, FDs, and cash. Someone with decades to invest might hold more growth. Someone approaching a goal should hold more stability. The mix matters more than the exact fund you choose, because it sets the overall risk. A common starting point is that your equity percentage is roughly 100 minus your age, which is a rule of thumb rather than a law.",
    source: { name: "SEBI: Asset allocation", link: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognizedFp=yes" },
  },
  {
    id: "insurance-vs-investment",
    topic: "basics",
    question: "Should I use insurance as an investment?",
    short:
      "Usually no. Insurance and investment solve different problems, and merging them tends to make both worse and more expensive.",
    explanation:
      "Life insurance protects your dependants if you die. Investments grow money. Traditional plans such as endowment, moneyback, and ULIP products combine the two, but the cover is often too low and the returns are usually lower than separating the goals, which means a term plan for protection plus a fund for growth. Check the cost, the cover amount, and the surrender value before combining them. Term insurance alongside a separate investment is the structure most independent advisers recommend.",
    source: { name: "IRDAI: Insurance education", link: "https://www.irdai.gov.in/" },
  },
  {
    id: "ppp-basics",
    topic: "policy",
    question: "What is the National Pension System in brief?",
    short:
      "NPS is a long term, government backed retirement account that invests across equity and debt, with tax breaks under both regimes.",
    explanation:
      "The National Pension System is a voluntary retirement account with a defined contribution structure, regulated by PFRDA. Money is invested in a mix you choose, across equity, corporate bonds, and government securities, and stays locked until you reach 60. It offers an extra ₹50,000 deduction under 80CCD(1B) in the old regime, and the employer contribution is deductible under both. At retirement you withdraw part as a lump sum and use the rest to buy an annuity. It suits long horizon retirement saving rather than short term needs.",
    source: { name: "PFRDA: NPS", link: "https://www.pfrda.org.in/index.php/en/nps" },
  },
];

export const ASK_FERMOR_TOPICS = [
  { id: "savings", label: "Savings and investing" },
  { id: "tax", label: "Tax" },
  { id: "loan", label: "Loans and EMI" },
  { id: "basics", label: "Money basics" },
  { id: "policy", label: "Policy explainers" },
];
// Pure calculator functions, kept separate from the UI so the math can be tested.

// SIP (Systematic Investment Plan) future value.
// P = monthly investment, annualReturnPct = annual %, years = tenure.
export function sipFutureValue(P, annualReturnPct, years) {
  const i = annualReturnPct / 12 / 100;
  const N = Math.round(years * 12);
  if (N <= 0) return { futureValue: 0, invested: 0, growth: 0 };
  const fv = i === 0 ? P * N : P * (((Math.pow(1 + i, N) - 1) / i) * (1 + i));
  const invested = P * N;
  return {
    futureValue: Math.round(fv),
    invested: Math.round(invested),
    growth: Math.round(fv - invested),
  };
}

// EMI calculation.
// principal = loan amount, annualRatePct = interest %, years = tenure.
export function emiCalc(principal, annualRatePct, years) {
  const N = Math.round(years * 12);
  const i = annualRatePct / 12 / 100;
  if (N <= 0 || principal <= 0) {
    return { emi: 0, totalPayment: 0, totalInterest: 0, schedule: [] };
  }
  const emi =
    i === 0
      ? principal / N
      : (principal * i * Math.pow(1 + i, N)) / (Math.pow(1 + i, N) - 1);
  const totalPayment = emi * N;
  const totalInterest = totalPayment - principal;

  // Year-by-year balance breakdown.
  let balance = principal;
  const schedule = [];
  for (let y = 1; y <= Math.ceil(years); y++) {
    const startBalance = balance;
    let yearInterest = 0;
    let yearPrincipal = 0;
    const monthsThisYear = Math.min(12, N - (y - 1) * 12);
    for (let m = 0; m < monthsThisYear; m++) {
      const interestPart = balance * i;
      const principalPart = emi - interestPart;
      balance -= principalPart;
      yearInterest += interestPart;
      yearPrincipal += principalPart;
    }
    schedule.push({
      year: y,
      startBalance: Math.round(startBalance),
      endBalance: Math.max(0, Math.round(balance)),
      interestPaid: Math.round(yearInterest),
      principalPaid: Math.round(yearPrincipal),
    });
  }

  return {
    emi: Math.round(emi),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
    schedule,
  };
}

export const SIP_DEFAULTS = {
  monthly: 10000,
  minMonthly: 1000,
  maxMonthly: 50000,
  stepMonthly: 500,
  years: 10,
  minYears: 1,
  maxYears: 30,
  stepYears: 1,
};

export const EMI_DEFAULTS = {
  principal: 500000,
  minPrincipal: 50000,
  maxPrincipal: 5000000,
  stepPrincipal: 10000,
  rate: 9.5,
  minRate: 4,
  maxRate: 24,
  stepRate: 0.1,
  years: 5,
  minYears: 1,
  maxYears: 30,
  stepYears: 1,
};
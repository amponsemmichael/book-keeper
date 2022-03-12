
let invoices = [
    {
      name: "Santa Monica",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995",
    },
    {
      name: "Stankonia",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      name: "Ocean Avenue",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      name: "Tubthumper",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      name: "RichDad",
      number: 2022,
      amount: "$14,000",
      due: "09/25/2023",
    },
    {
      name: "Atomic habit",
      number: 2023,
      amount: "$14,000",
      due: "09/25/2024",
    },
    {
      name: "Creating your own future",
      number: 2025,
      amount: "$14,000",
      due: "09/25/2023",
    },
    {
      name: "Say No to excuses",
      number: 2026,
      amount: "$14,000",
      due: "09/25/2023",
    },
    {
      name: "Never Eat Alone",
      number: 2027,
      amount: "$14,000",
      due: "09/25/2023",
    },
    {
      name: "Born to Win",
      number: 2028,
      amount: "$14,000",
      due: "09/25/2023",
    },
   
  ];
  
  export function getInvoices(number) {
    return invoices
  }

  export function getInvoice(number) {
    return invoices.find
      (invoice => invoice.number === number
    )
  }

  export function deleteInvoice(number) {
    invoices = invoices.filter
      (invoice => invoice.number !== number
    );
  }
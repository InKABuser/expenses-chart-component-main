fetch("data.json")
  .then((Response) => Response.json())
  .then((data) => {
    const labels = data.map((item) => item.day);
    const amounts = data.map((item) => item.amount);
    const amountsWithDollarSign = amounts.map((amount) => `$${amount}`);

    const canvas = document.getElementById("bar-charts");

    new Chart(canvas, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "money",
            data: amounts,
            borderWidth: 0,
            borderRadius: 5,
            backgroundColor: "#ec775f",
            hoverBackgroundColor: "#76b5bc",
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: () => "", // Show the day as title
              label: (tooltipItem) => `$${tooltipItem.raw}`, // Show amount with dollar sign
            },
            backgroundColor: "hsl(25, 47%, 15%)", // Tooltip background color
            titleColor: "#000000", // Title text color
            bodyColor: "#FFFFFF", // Body text color
            displayColors: false,
            padding: 8,
            caretSize: 0,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: {
              display: true, // Change to true if you want x-axis labels
            },
          },
          y: {
            beginAtZero: true,
            grid: { display: false },
            border: { display: false },
            ticks: {
              display: false, // Set to false to hide y-axis numbers
            },
          },
        },
      },
    });
  })
  .catch((error) => console.error("Error fetching the data:", error));

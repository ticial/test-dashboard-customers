const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: true,
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: false,
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: false,
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: true,
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: true,
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: true,
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: true,
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: false,
  },
];

if ("content" in document.createElement("template")) {
  const table = document.querySelector(".customers-table");
  const template = document.querySelector("#desktop-table-row");

  for (const customer of customers) {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".customers-table__column-name").textContent =
      customer.name;
    clone.querySelector(".customers-table__column-company").textContent =
      customer.company;
    clone.querySelector(".customers-table__column-phone").textContent =
      customer.phone;
    clone.querySelector(".customers-table__column-email").textContent =
      customer.email;
    clone.querySelector(".customers-table__column-country").textContent =
      customer.country;

    clone
      .querySelector(".customers-table__column-status")
      .appendChild(createStatus(customer.status));

    table.appendChild(clone);
  }
}

function createStatus(isActive) {
  const status_div = document.createElement("div");
  status_div.classList.add("customers-table__status");
  if (isActive) {
    status_div.textContent = "Active";
    status_div.classList.add("customers-table__status_active");
  } else {
    status_div.textContent = "Inactive";
  }
  return status_div;
}

const sidebar = document.querySelector(".sidebar");

function sidebarToggle() {
  console.log("toggle", sidebar, sidebar.classList);
  if (sidebar.classList.contains("sidebar_mobile")) {
    sidebar.classList.remove("sidebar_mobile");
  } else {
    sidebar.classList.add("sidebar_mobile");
  }
}

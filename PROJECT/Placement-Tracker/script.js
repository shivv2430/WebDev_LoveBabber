let applications =
    JSON.parse(localStorage.getItem("applications")) || [];

function saveData() {
    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );
}

function addApplication() {

    const company =
        document.getElementById("company").value.trim();

    const role =
        document.getElementById("role").value.trim();

    const status =
        document.getElementById("status").value;

    if (company === "" || role === "") {
        alert("Please fill all fields");
        return;
    }

    applications.push({
        company,
        role,
        status
    });

    saveData();
    renderApplications();

    document.getElementById("company").value = "";
    document.getElementById("role").value = "";
}

function deleteApplication(index) {
    applications.splice(index, 1);
    saveData();
    renderApplications();
}

function renderApplications() {

    const search =
        document.getElementById("search")
            .value.toLowerCase();

    const filter =
        document.getElementById("filter").value;

    let tableBody =
        document.getElementById("tableBody");

    tableBody.innerHTML = "";

    let filteredApps =
        applications.filter(app => {

            let matchSearch =
                app.company.toLowerCase()
                    .includes(search);

            let matchFilter =
                filter === "All" ||
                app.status === filter;

            return matchSearch && matchFilter;
        });

    filteredApps.forEach((app, index) => {

        tableBody.innerHTML += `
        <tr>
            <td>${app.company}</td>
            <td>${app.role}</td>
            <td>${app.status}</td>
            <td>
                <button
                class="delete-btn"
                onclick="deleteApplication(${applications.indexOf(app)})">
                Delete
                </button>
            </td>
        </tr>
        `;
    });

    updateDashboard();
}

function updateDashboard() {

    document.getElementById("total").innerText =
        applications.length;

    document.getElementById("selected").innerText =
        applications.filter(
            app => app.status === "Selected"
        ).length;

    document.getElementById("interview").innerText =
        applications.filter(
            app => app.status === "Interview"
        ).length;
}

renderApplications();
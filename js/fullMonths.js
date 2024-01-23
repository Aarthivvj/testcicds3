// Generate 12 months calendar view
function generateCalendar(year) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const container = $("#calendar-container");
    container.empty();
  
    for (let monthIdx = 0; monthIdx < 12; monthIdx++) {
      const month = monthIdx + 1;
      const firstDay = new Date(year, monthIdx, 1);
      const lastDay = new Date(year, monthIdx + 1, 0);
      
      const monthDiv = $("<div>").addClass("month");
      monthDiv.append($("<h5>").text(months[monthIdx] + " " + year));
  
      const table = $("<table>").addClass("calendar-table");
      table.append($("<tbody>"));
      const headerRow = $("<tr>");
      
      headerRow.append($("<th>").text("Sun"));
      headerRow.append($("<th>").text("Mon"));
      headerRow.append($("<th>").text("Tue"));
      headerRow.append($("<th>").text("Wed"));
      headerRow.append($("<th>").text("Thu"));
      headerRow.append($("<th>").text("Fri"));
      headerRow.append($("<th>").text("Sat"));
      table.append(headerRow);
  
      const firstDayOfWeek = firstDay.getDay();
      const daysInMonth = lastDay.getDate();
  
      let date = 1;
      for (let row = 0; row < 6; row++) {
        const tableRow = $("<tr>");
        for (let col = 0; col < 7; col++) {
          const tableData = $("<td>").addClass("s");
          if (row === 0 && col < firstDayOfWeek) {
            tableData.text("");
          } else if (date <= daysInMonth) {
            tableData.text(date);
            date++;
          }
          tableRow.append(tableData);
        }
        table.append(tableRow);
      }
      
      monthDiv.append(table);
      container.append(monthDiv);
    }
  }
  
  $(document).ready(function() {
    const currentYear = new Date().getFullYear();
    
    // Populate the year dropdown
    const yearDropdown = $("#year-dropdown");
    for (let year = currentYear - 95; year <= currentYear + 0; year++) {
      const option = $("<option>").attr("value", year).text(year);
      if (year === currentYear) {
        option.attr("selected", "selected");
      }
      yearDropdown.append(option);
    }
    
    // Display calendar for the current year initially
    generateCalendar(currentYear);
    console.log(currentYear);
    
    
    // Handle year change event
    yearDropdown.on("change", function() {
      const selectedYear = parseInt($(this).val(), 10);
      generateCalendar(selectedYear);
    });
  });
  
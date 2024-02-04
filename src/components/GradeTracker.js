import React, { useEffect } from "react";
import '../styles/GradeTracker.css'
import * as XLSX from "xlsx";

export default function GradeTracker() {
  // Highlight the drop area when a course is dragged over
  function allowDrop(event) {
    event.preventDefault();
    const dropArea = event.target.closest('.course-table');
    if (dropArea) {
      dropArea.classList.add('highlighted');
    }
  }

  // Drop the course into the drop area
  function drop(event) {
    event.preventDefault();
    const courseId = event.dataTransfer.getData("text");
    const courseElement = document.getElementById(courseId);

    const dropAreaId = event.target.closest('.course-table').id;
    const dropList = document.getElementById(`${dropAreaId}-list`);
    dropList.appendChild(courseElement);

    updateCreditSums();
  }

  // Set the course to be dragged
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  // Validate the input fields and show the input section
  function showInputSection() {
    const userInfoSection = document.getElementById("userInfoSection");
    const inputSection = document.getElementById("inputSection");

    const name = document.getElementById("name").value;
    // const rollNo = document.getElementById('rollNo').value;
    const branch = document.getElementById("branch").value;
    // const branch2 = document.getElementById("branch2").value;
    const program = document.getElementById("program").value;
    const admissionYear = document.getElementById("admissionYear").value;

    if (name && branch && program && admissionYear) {
      userInfoSection.style.display = "none";
      inputSection.style.display = "block";
    } else {
      alert("Please fill in all user information fields.");
    }

  }

  // Display the user information
  function displayUserInfo(name, branch, program, admissionYear) {
    const userInfoContainer = document.getElementById('userInfo');
    const userInfoElement = document.createElement('div');
    userInfoElement.innerHTML = `<div class="name">${name} | ${program} '${admissionYear.slice(-2)} ${branch}</div>`;
    userInfoContainer.appendChild(userInfoElement);
  }

  // Update the credit sums for each course table
  function updateCreditSum(tableId, maxCredits) {
    const table = document.getElementById(tableId);
    const courses = table.getElementsByTagName('li');
    let sum = 0;

    for (let i = 0; i < courses.length; i++) {
      const creditsString = courses[i].querySelector('.content-credits').textContent;

      if (creditsString) {
        sum += parseInt(creditsString, 10);
      }
    }

    const sumElement = document.getElementById(`${tableId}-credit-sum`);
    if (sumElement) {
      sumElement.textContent = `Completed Credits: ${sum}`;
    }

    const remainingCreditsElement = document.getElementById(`${tableId}-max-credits`);
    if (remainingCreditsElement) {
      remainingCreditsElement.textContent = `/ ${maxCredits}`;
    }

  }

  function updateCreditSums() {
    const year = document.getElementById('admissionYear').value;
    let maxCompulsoryCredits;
    let maxHSCredits;
    let maxOpenElectiveCredits;
    let maxExtendedCoreCredits;
    let maxBSCredits;
    let maxScienceBasketCredits;
    let maxMathBasketCredits;
    let maxOpenProjectCredits;

    if (year === "2019") {
      maxCompulsoryCredits = 120;
      maxHSCredits = 32;
      maxOpenElectiveCredits = 12;
      maxExtendedCoreCredits = 12;
      maxBSCredits = 8;
      maxScienceBasketCredits = 12;
      maxMathBasketCredits = 12;
      maxOpenProjectCredits = 12;
    }

    else if (year === "2020") {
      maxCompulsoryCredits = 120;
      maxHSCredits = 32;
      maxOpenElectiveCredits = 12;
      maxExtendedCoreCredits = 12;
      maxBSCredits = 8;
      maxScienceBasketCredits = 12;
      maxMathBasketCredits = 12;
      maxOpenProjectCredits = 12;
    }

    else if (year === "2021") {
      maxCompulsoryCredits = 120;
      maxHSCredits = 32;
      maxOpenElectiveCredits = 12;
      maxExtendedCoreCredits = 12;
      maxBSCredits = 12;
      maxScienceBasketCredits = 12;
      maxMathBasketCredits = 12;
      maxOpenProjectCredits = 12;
    }

    else if (year === "2022") {
      maxCompulsoryCredits = 120;
      maxHSCredits = 32;
      maxOpenElectiveCredits = 12;
      maxExtendedCoreCredits = 12;
      maxBSCredits = 12;
      maxScienceBasketCredits = 12;
      maxMathBasketCredits = 12;
      maxOpenProjectCredits = 12;
    }

    else if (year === "2023") {
      maxCompulsoryCredits = 120;
      maxHSCredits = 32;
      maxOpenElectiveCredits = 12;
      maxExtendedCoreCredits = 12;
      maxBSCredits = 12;
      maxScienceBasketCredits = 12;
      maxMathBasketCredits = 12;
      maxOpenProjectCredits = 12;
    }

    // Update the credit sums for each course table
    updateCreditSum('all-courses', 120);
    updateCreditSum('compulsory-courses', maxCompulsoryCredits);
    updateCreditSum('hs-courses', maxHSCredits);
    updateCreditSum('open-elective-courses', maxOpenElectiveCredits);
    updateCreditSum('extended-core-courses', maxExtendedCoreCredits);
    updateCreditSum('bs-elective-courses', maxBSCredits);
    updateCreditSum('science-basket-courses', maxScienceBasketCredits);
    updateCreditSum('math-basket-courses', maxMathBasketCredits);
    updateCreditSum('open-project-courses', maxOpenProjectCredits);
  }

  // Add highlighted classs to the drag and drop elements
  function dragend(event) {
    updateCreditSums();

    const dropAreas = document.querySelectorAll('.course-table');
    dropAreas.forEach(dropArea => dropArea.classList.remove('highlighted'));
  }

  function dragleave(event) {
    const dropAreas = document.querySelectorAll('.course-table');
    dropAreas.forEach(dropArea => dropArea.classList.remove('highlighted'));
  }

  // Fetch the compulsory courses based on the branch and year
  async function fetchCompulsoryCourses(branch, year) {
    // try {
    const arrayBuffer = await (await fetch(process.env.PUBLIC_URL + "/Sheets/coures-codes.xlsx")).arrayBuffer();
    const data = new Uint8Array(arrayBuffer);

    // Use SheetJS to read the Excel file
    const workbook = XLSX.read(data, {type: 'array'});

    // Construct the sheet name dynamically based on the year
    const sheetName = `year ${year}`;

    // Check if the sheet exists in the workbook
    if (!workbook.SheetNames.includes(sheetName)) {
      console.error(`Sheet '${sheetName}' not found in the workbook.`);
      return [];
    }

    // Access the specified sheet
    const sheet = workbook.Sheets[sheetName];

    // Convert the sheet data to JSON
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    // Extract compulsory courses based on the branch
    const branchCompulsoryCourses = {};
    jsonData.forEach(row => {
      const branchName = row['Branch'];

      // Filter out all properties in the row that represent course codes
      const courses = Object.values(row)
        .filter(Boolean)
        .filter(value => typeof value === 'string' && value.match(/^[A-Z]+\s\d+$/))
        .map(course => course.trim());

      branchCompulsoryCourses[branchName] = courses;
    });

    return branchCompulsoryCourses[branch] || [];
    // } catch (error) {
    //   console.error('Error fetching compulsory courses:', error);
    //   return [];
    // }
  }

  // Parse the input and add courses to the corresponding tables
  async function parseInput() {
    const inputTextArea = document.getElementById('courseInput');
    const inputText = inputTextArea.value;
    const lines = inputText.split('\n');

    // Process each line and add courses to the corresponding tables
    const allCoursesList = document.getElementById('all-courses-list');
    const hsCoursesList = document.getElementById('hs-courses-list');
    const compulsoryCoursesList = document.getElementById('compulsory-courses-list');
    const extendedCoreCoursesList = document.getElementById('extended-core-courses-list');
    const openElectiveCoursesList = document.getElementById('open-elective-courses-list');
    const bsElectiveCoursesList = document.getElementById('bs-elective-courses-list');
    const scienceBasketCoursesList = document.getElementById('science-basket-courses-list');
    const mathBasketCoursesList = document.getElementById('math-basket-courses-list');
    const openProjectCoursesList = document.getElementById('open-project-courses-list');
    const physicalEducationList = document.getElementById('physical-education-list');

    // Get the selected admissionYear, program, and branch from sessionStorage
    const name = document.getElementById('name').value;
    const program = document.getElementById('program').value;
    const branch = document.getElementById('branch').value;
    const branch2 = document.getElementById('branch2').value;
    const admissionYear = document.getElementById('admissionYear').value;
    const branchCompulsoryCourses = await fetchCompulsoryCourses(branch, admissionYear);
    const branch2CompulsoryCourses = await fetchCompulsoryCourses(branch2, admissionYear);

    // Define maximum HS and BS credits based on the admission year
    let hsCreditsSum = 0;
    let bsCreditsSum = 0;
    let maxHSCredits;
    let maxBSCredits;

    if (admissionYear === '2019' || '2020') {
      maxHSCredits = 32;
      maxBSCredits = 8;
    } else if (admissionYear === '2021') {
      maxHSCredits = 32;
      maxBSCredits = 12;
    } else {
      maxHSCredits = 32;
      maxBSCredits = 12;
    }

    lines.forEach((line, index) => {

      if (line) {
        const [semester, code, name, credits, grades] = line.split('\t');
        const course = {
          id: `course${index + 1}`,
          code: `${code}`,
          name: `${name}`,
          credits: parseInt(credits, 10),
          grades: grades.trim(),
        };

        // Create a list item for the course
        const li = document.createElement('li');
        li.id = course.id;
        li.draggable = true;
        li.addEventListener('dragstart', drag);

        // Create the left section
        const leftSection = document.createElement('div');
        leftSection.classList.add('course-code-grade-credits');

        // Create div elements for course code and grade
        const courseCodeDiv = document.createElement('div');
        const courseGradeCodeDiv = document.createElement('div');
        const courseGradeDiv = document.createElement('div');
        const contentCreditsDiv = document.createElement('div');
        courseCodeDiv.classList.add('course-code');
        courseCodeDiv.textContent = `${course.code}`;
        courseGradeCodeDiv.classList.add('course-credit-grade');
        courseGradeDiv.classList.add('course-grade');
        courseGradeDiv.textContent = `${course.grades}    |  `;
        contentCreditsDiv.classList.add('content-credits');
        contentCreditsDiv.textContent = `${course.credits}`;

        // Append course code and grade to leftUpSection 
        leftSection.appendChild(courseCodeDiv);
        leftSection.appendChild(courseGradeCodeDiv);
        courseGradeCodeDiv.appendChild(courseGradeDiv);
        courseGradeCodeDiv.appendChild(contentCreditsDiv);

        // Create the right section
        const rightSection = document.createElement('div');
        rightSection.classList.add('list-right');

        // Create div elements for heading credits and content credits
        // const headingCreditsDiv = document.createElement('div');
        // headingCreditsDiv.classList.add('heading-credits');
        // headingCreditsDiv.textContent = 'Credits';

        // Create div element for course name
        const courseNameDiv = document.createElement('div');
        courseNameDiv.classList.add('course-name');
        courseNameDiv.textContent = `${course.name}`;
        rightSection.appendChild(courseNameDiv);

        // Create a structured course object
        let extendedCore = ['ES 331', 'CS 614', 'CS 433', 'CS 432', 'ES 645'];
        let branch2;
        if (program !== 'Dual Majors') {
          branch2 = branch;
        } else {
          branch2 = document.getElementById('branch2').value;
        }
        li.appendChild(leftSection);
        li.appendChild(rightSection);

        // Append the course to the corresponding table based on conditions
        if (admissionYear < '2022') {
          if (code.startsWith('PE') || code.startsWith('IN') || code.startsWith('FP')) {
            physicalEducationList.appendChild(li);
          } else if ((extendedCore.some(entry => code.startsWith(entry))) ||
            ((branch === 'CSE' || branch2 === 'CSE') && extendedCore.some(entry => code.startsWith(entry + " (R)")))) {
            extendedCoreCoursesList.appendChild(li);
          } else if ((code.startsWith('HS') || code.startsWith('MS ') || code.startsWith('DES')) && hsCreditsSum < maxHSCredits) {
            hsCreditsSum += course.credits;
            hsCoursesList.appendChild(li);
          } else if (branchCompulsoryCourses.includes(code)
            || branchCompulsoryCourses.some(entry => code.startsWith(entry + "(N)"))
            || branchCompulsoryCourses.some(entry => code.startsWith(entry + " (R)"))
            || branchCompulsoryCourses.some(entry => code.startsWith(entry + 'A'))
            || branchCompulsoryCourses.some(entry => code.startsWith(entry + 'B'))
            || branchCompulsoryCourses.includes(code)
            || branch2CompulsoryCourses.some(entry => code.startsWith(entry + "(N)"))
            || branch2CompulsoryCourses.some(entry => code.startsWith(entry + " (R)"))
            || branch2CompulsoryCourses.some(entry => code.startsWith(entry + 'A'))
            || branch2CompulsoryCourses.some(entry => code.startsWith(entry + 'B'))
            || branch2CompulsoryCourses.includes(code)) {
            // console.log(`Course ${code} found in branchCompulsoryCourses ${branch}, ${branch2}`);
            compulsoryCoursesList.appendChild(li);
          }
          else if ((code.startsWith('PH') || code.startsWith('EH') || code.startsWith('CH')) && bsCreditsSum < maxBSCredits) {
            bsCreditsSum += course.credits;
            bsElectiveCoursesList.appendChild(li);
          }
          else {
            openElectiveCoursesList.appendChild(li);
            if (branch !== 'CSE' && branch2 !== 'CSE') {
              document.getElementById('extended-core-courses').style.display = 'none';
            }
          }

          // Hide Science Basket, Maths Basket, Open Project tables for admissionYear < 2022
          document.getElementById('science-basket-courses').style.display = 'none';
          document.getElementById('math-basket-courses').style.display = 'none';
          document.getElementById('open-project-courses').style.display = 'none';
        }

        else if (admissionYear >= 2022) {
          if (code.startsWith('PE') || code.startsWith('IN') || code.startsWith('FP')) {
            physicalEducationList.appendChild(li);
          } else if ((extendedCore.some(entry => code.startsWith(entry))) ||
            ((branch === 'CSE' || branch2 === 'CSE') && extendedCore.some(entry => code.startsWith(entry + " (R)")))) {
            extendedCoreCoursesList.appendChild(li);
          } else if ((code.startsWith('HS') || code.startsWith('MS ') || code.startsWith('DES')) && hsCreditsSum < maxHSCredits) {
            hsCreditsSum += course.credits;
            hsCoursesList.appendChild(li);
          } else if (branchCompulsoryCourses.includes(code) || branch2CompulsoryCourses.includes(code)) {
            console.log(`Course ${code} found in branchCompulsoryCourses`);
            compulsoryCoursesList.appendChild(li);
          }
          else if (code.startsWith('PH') || code.startsWith('EH') || code.startsWith('CH')) {
            scienceBasketCoursesList.appendChild(li);
          }
          else if (code.startsWith('MA')) {
            mathBasketCoursesList.appendChild(li)
          }

          else {
            openElectiveCoursesList.appendChild(li);
            if (branch !== 'CSE' && branch2 !== 'CSE') {
              document.getElementById('extended-core-courses').style.display = 'none';
            }
          }

          // Hide BS Electives table for admissionYear >= 2022
          document.getElementById('bs-elective-courses').style.display = 'none';
        }
      } else {
        console.error(`Line ${index + 1} is undefined.`);
      }
    });

    // Clear the input textarea and update the credit sums
    inputTextArea.value = '';
    updateCreditSums();

    // Hide the input section and show the output section
    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('outputSection').style.display = 'flex';
    displayUserInfo(name, branch, program, admissionYear);
  }

  const items = document.querySelectorAll('.course-table');
  items.forEach(item => {
    item.addEventListener('dragstart', drag);
  });
  document.addEventListener('dragover', allowDrop);
  document.addEventListener('drop', drop);

  useEffect(() => {
    // Show/hide branch2 based on the selected program
    document.getElementById('program').addEventListener('change', function () {
      const program = this.value;
      const branch2Select = document.getElementById('branch2');

      branch2Select.style.display = (program === 'Dual Majors') ? 'block' : 'none';
    });

    // Show/hide branch2 based on the selected program
    document.getElementById('branch2label').addEventListener('change', function () {
      const program = this.value;
      const branch2Select = document.getElementById('branch2label');

      branch2Select.style.display = (program === 'Dual Majors') ? 'block' : 'none';
    });
  });

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: "black",
      backgroundColor: state.isSelected ? "var(--red)" : "#ffffff",
      "&:hover": {
        backgroundColor: "rgba(237, 28, 36, 0.10)",
      }
    }),

    control: (defaultStyles, state) => ({
      ...defaultStyles,
      boxShadow: state.isFocused ? "0px 0px 1.5px 1.5px var(--red)" : "none",
      borderColor: state.isFocused ? "var(--red)" : "rgba(0,0,0,0.5)",
      width: "150px",
      "&:hover": {
        borderColor: state.isFocused ? "var(--red)" : "rgba(0,0,0,0.5)",
      }
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "rgba(0,0,0,0.75)",
      borderColor: "var(--red)",
    }),
  };

  return (
    <>
      {/* Grade Tracker Section */}
      <div className="your-component" style={{ backgroundImage: `url(${'/Images/ExperiencesBG.webp'})` }}></div>
      <div id="grade-tracker">
        <div id="userInfoSection" className="container">
          <label className="inputLabel" htmlFor="name">
            Name:
          </label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label className="inputLabel" htmlFor="program">
            Program:
          </label>
          <select id="program">
            <option className="opt" value="B.Tech">
              B.Tech
            </option>
            <option value="M.Tech">M.Tech</option>
            <option value="Dual Majors">Dual Majors</option>
          </select>

          <label className="inputLabel" htmlFor="branch">
            Branch:
          </label>
          <select id="branch">
            <option value="CSE">Computer Science and Engineering</option>
            <option value="EE">Electrical Engineering</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CE">Civil Engineering</option>
            <option value="CL">Chemical Engineering</option>
            <option value="MSE">Materials Engineering</option>
          </select>

          <label
            id="branch2label"
            className="inputLabel"
            htmlFor="branch2"
            style={{ display: "none" }}
          >
            Branch 2:{" "}
          </label>
          <select id="branch2" style={{ display: "none" }}>
            <option value="CSE">Computer Science and Engineering</option>
            <option value="EE">Electrical Engineering</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CE">Civil Engineering</option>
            <option value="CL">Chemical Engineering</option>
            <option value="MSE">Materials Engineering</option>
          </select>

          <label className="inputLabel" htmlFor="admissionYear">
            Year of Admission (2019-2024):
          </label>
          <select id="admissionYear">
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>

          <button onClick={showInputSection}>Next</button>
        </div>

        <div id="inputSection" style={{ display: "none" }}>
          <div id="input-section">
            <h2 style={{ width: "35vw" }}>Enter Courses</h2>
            <textarea
              id="courseInput"
              rows="10"
              cols="50"
              placeholder="Enter courses in the specified format"
            ></textarea>
            <button onClick={parseInput}>Submit</button>
          </div>
        </div>

        <div id="outputSection" style={{ display: "none" }}>
          <div id="heading-and-name">
            <h1 className="main-heading">Graduation Credits Tracker</h1>

            <div id="userInfo"></div>
          </div>

          <div id="course-tables" className="flex-container">
            {/* <!-- Common tables --> */}
            <div
              className="course-table"
              id="compulsory-courses"
              onDrop={drop}
              onDragOver={allowDrop}
              onDragEnd={dragend}
              onDragLeave={dragleave}
            >
              <h2>Core Courses</h2>
              <ul id="compulsory-courses-list"></ul>
              <div className="credits-container">
                <p id="compulsory-courses-credit-sum">Total Credits: 0</p>
                <p
                  id="compulsory-courses-max-credits"
                  style={{ display: "none" }}
                ></p>
              </div>
            </div>

            <div
              className="course-table"
              id="hs-courses"
              onDrop={drop}
              onDragOver={allowDrop}
              onDragEnd={dragend}
              onDragLeave={dragleave}
            >
              <h2>HSS Courses</h2>
              <ul id="hs-courses-list"></ul>
              <div className="credits-container">
                <p id="hs-courses-credit-sum">Total Credits: 0</p>
                <p id="hs-courses-max-credits"></p>
              </div>
            </div>

            <div
              className="course-table"
              id="open-elective-courses"
              onDrop={drop}
              onDragOver={allowDrop}
              onDragEnd={dragend}
              onDragLeave={dragleave}
            >
              <h2>Open Electives</h2>
              <ul id="open-elective-courses-list"></ul>
              <div className="credits-container">
                <p id="open-elective-courses-credit-sum">Total Credits: 0</p>
                <p id="open-elective-courses-max-credits"></p>
              </div>
            </div>

            <div
              className="course-table"
              id="extended-core-courses"
              onDrop={drop}
              onDragOver={allowDrop}
              onDragEnd={dragend}
              onDragLeave={dragleave}
            >
              <h2>Extended Core Courses</h2>
              <ul id="extended-core-courses-list"></ul>
              <div className="credits-container">
                <p id="extended-core-courses-credit-sum">Total Credits: 0</p>
                <p id="extended-core-courses-max-credits"></p>
              </div>
            </div>

            <div
              className="course-table"
              id="physical-education"
              onDrop={drop}
              onDragOver={allowDrop}
              onDragEnd={dragend}
              onDragLeave={dragleave}
            >
              <h2>Others</h2>
              <ul id="physical-education-list"></ul>
              <div className="credits-container">
                <p id="physical-education-credit-sum"></p>
                <p
                  id="physical-education-max-credits"
                  style={{ display: "none" }}
                ></p>
              </div>
            </div>

            {/* <!-- For admissionYear < 2022 --> */}

            <div
              className="course-table"
              id="bs-elective-courses"
              onDrop={drop}
              onDragOver={allowDrop}
              onDragEnd={dragend}
              onDragLeave={dragleave}
            >
              <h2>BS Electives</h2>
              <ul id="bs-elective-courses-list"></ul>
              <div className="credits-container">
                <p id="bs-elective-courses-credit-sum">Total Credits: 0</p>
                <p id="bs-elective-courses-max-credits"></p>
              </div>
            </div>

            {/* <!-- For admissionYear >= 2022 --> */}
            <div
              className="course-table"
              id="science-basket-courses"
              onDrop={drop}
              onDragOver={allowDrop}
              onDragEnd={dragend}
              onDragLeave={dragleave}
            >
              <h2>Science Basket</h2>
              <ul id="science-basket-courses-list"></ul>
              <div className="credits-container">
                <p id="science-basket-courses-credit-sum">Total Credits: 0</p>
                <p id="science-basket-courses-max-credits"></p>
              </div>
            </div>

            <div
              className="course-table"
              id="math-basket-courses"
              onDrop={drop}
              onDragOver={allowDrop}
              onDragEnd={dragend}
              onDragLeave={dragleave}
            >
              <h2>Maths Basket</h2>
              <ul id="math-basket-courses-list"></ul>
              <div className="credits-container">
                <p id="math-basket-courses-credit-sum">Total Credits: 0</p>
                <p id="math-basket-courses-max-credits"></p>
              </div>
            </div>

            <div
              className="course-table"
              id="open-project-courses"
              onDrop={drop}
              onDragOver={allowDrop}
              onDragEnd={dragend}
              onDragLeave={dragleave}
            >
              <h2>Open project</h2>
              <ul id="open-project-courses-list"></ul>
              <div className="credits-container">
                <p id="open-project-courses-credit-sum">Total Credits: 0</p>
                <p id="open-project-courses-max-credits"></p>
              </div>
            </div>

            <div
              className="course-table"
              id="all-courses"
              onDrop={drop}
              onDragOver={allowDrop}
              onDragEnd={dragend}
              onDragLeave={dragleave}
            >
              <h2>Proficiency</h2>
              <ul id="all-courses-list"></ul>
              <div className="credits-container">
                {/* <!-- <p id="all-courses-credit-sum">Total Credits: 0</p> --> */}
                <p id="all-courses-max-credits" style={{ display: "none" }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

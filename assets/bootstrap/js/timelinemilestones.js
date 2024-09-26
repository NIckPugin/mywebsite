// Milestone data
const milestones = [
    { date: 'AUG 2023 -  PRESENT', title:'RND Engineer - Furhat Robotics AB', details: 'Details about milestone 1' },
    { date: 'OCT 2020 - AUG 2023', title:'Production Engineer - Furhat Robotics AB', details: 'Details about milestone 2' },
    { date: 'JUN 2018 - OCT 2020', title:'Robot Technician - Furhat Robotics AB', details: 'Details about milestone 3' },
    { date: 'Milestone 4', title:'Milestone 4 title', details: 'Details about milestone 4' },
    { date: 'Milestone 5', title:'Milestone 5 title', details: 'Details about milestone 5' },
    { date: 'Milestone 6', title:'Milestone 6 title', details: 'Details about milestone 6' },
    { date: 'Milestone 7', title:'Milestone 7 title', details: 'Details about milestone 7' },
    { date: 'Milestone 8', title:'Milestone 8 title', details: 'Details about milestone 8' }
];

// Get the container element
const timelineContainer = document.getElementById('timelineContainer');

// Loop over each milestone and create HTML elements dynamically
milestones.forEach((milestone, index) => {
    // Determine the position (left or right) based on the index
    const position = index % 2 === 0 ? 'left' : 'right';

    // Create the accordion HTML structure
    const milestoneHTML = `
        <div class="timeline-item ${position}">
            <div class="content">
                <div class="accordion" id="accordionExample${index + 1}">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index + 1}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index + 1}" aria-expanded="false" aria-controls="collapse${index + 1}">
                                ${milestone.title}
                                <br>
                                ${milestone.date}
                            </button>
                        </h2>

                        <div id="collapse${index + 1}" class="accordion-collapse collapse" aria-labelledby="heading${index + 1}" data-bs-parent="#accordionExample${index + 1}">
                            <div class="accordion-body">
                                ${milestone.details}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append the milestone to the timeline container
    timelineContainer.innerHTML += milestoneHTML;
});

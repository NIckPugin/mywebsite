// Milestone data
const milestones = [
    { title: 'Milestone 1', details: 'Details about milestone 1' },
    { title: 'Milestone 2', details: 'Details about milestone 2' },
    { title: 'Milestone 3', details: 'Details about milestone 3' },
    { title: 'Milestone 4', details: 'Details about milestone 4' },
    { title: 'Milestone 5', details: 'Details about milestone 5' },
    { title: 'Milestone 6', details: 'Details about milestone 6' },
    { title: 'Milestone 7', details: 'Details about milestone 7' },
    { title: 'Milestone 8', details: 'Details about milestone 8' }
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

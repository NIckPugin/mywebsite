// Milestone data
const milestones = [
    { date: 'AUG 2023 -  PRESENT', title:'RND Engineer - Furhat Robotics AB', details: 'In addition to continued involvement with the responsibilities from my previous roles, my main focus had been shifted toward finding innovative solutions to improve the product in terms of design, function, production and stability, which also included the prototyping, testing and implamentation thereof.' },
    { date: 'OCT 2020 - AUG 2023', title:'Production Engineer - Furhat Robotics AB', details: 'Having shifted our production to an external off-site partner, I provided assistance, feedback and instruction on tasks relating to the assembly and shipments of products to and from the production facility. I was also in charge of handling orders, shipments and repairs of products to and from customers, as well as hardware and logistics related customer support.' },
    { date: 'JUN 2018 - OCT 2020', title:'Robot Technician - Furhat Robotics AB', details: 'Here I was responsible for the in-house assembly of our products, and by proxy identifying areas for improvement in the production process and the product in general. I also managed inventory, including outbound and inbound orders of stock and components for production.'},
    { date: 'JUN 2016 - DEC 2017', title:'Administrative and Technical Assistant - Consumer Mortgage Management - (Pty) Ltd', details: 'Details about milestone 4' },
    { date: 'FEB 2016 - NOV 2016', title:'Mens Artistic Gymnastics Coach - Oaks Gymnastics', details: 'Details about milestone 5' },
    { date: 'JAN 2016 - NOV 2016', title:'BSc Hons Degree in Performance Sport - Stellenbosch University', details: 'Details about milestone 6' },
    { date: 'FEB 2014 - NOV 2016', title:'Assistant Gymnastics Coach - Dept. of Sport Science, Stellenbosch University', details: 'Details about milestone 7' },
    { date: 'FEB 2013 - NOV 2015', title:'BSc Degree in Sport Science - Stellenbosch University', details: 'Details about milestone 8' },
    { date: 'MAR 2012 - DEC 2012', title:'Academic Assistant - Stellenbosch University Sport Performance Institute', details: 'Here I worked in a youth sports initiaive program where I would assist with teaching children from underprivaledged households after school basic development fundimentals through movement, coordination and sport.' },
    { date: 'APR 2010 - MAR 2014', title:'Rhythm Guitarist - Somdeday Rush', details: 'I was one of the founding members of an alternative rock band called Someday Rush. Playing in several national level band battle competitions, and releasing 2 EP albums.' },
    { date: 'FEB 2008 - JUN 2011', title:'ND in Mechatronics Engineering - Cape Peninsula University of Technology', details: 'Details about milestone 8' }
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

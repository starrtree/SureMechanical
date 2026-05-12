export const site = {
  name: 'SURE Group',
  tagline: 'Three trusted companies. One standard for mechanical excellence.',
  description:
    'SURE Group unites SURE Mechanical, Cincinnati Air Conditioning Company, and Thermolinear to deliver enterprise HVAC construction, mechanical fabrication, service, and environmental control solutions.',
  address: ['3494 Beekman Street', 'Cincinnati, OH 45223'],
  phone: '(513) 898-1050',
  fax: '(513) 898-1052',
  email: 'info@suremechanical.com',
};

export const navItems = [
  ['Home', '/'],
  ['About', '/about/'],
  ['Companies', '/companies/'],
  ['Services', '/services/'],
  ['Industries', '/industries/'],
  ['Projects', '/projects/'],
  ['Careers', '/careers/'],
  ['Contact', '/contact/'],
];

export const pageMeta = {
  '/': ['Commercial HVAC & Mechanical Construction | SURE Group', 'Enterprise commercial HVAC, mechanical construction, fabrication, service, and environmental control solutions for critical facilities across the Tri-State region.'],
  '/about/': ['About SURE Group | Commercial HVAC & Mechanical Construction', 'Learn how SURE Group brings together legacy HVAC service, minority-owned mechanical construction, and custom environmental control manufacturing.'],
  '/companies/': ['SURE Group Companies | SURE Mechanical, Cincinnati Air & Thermolinear', 'Explore the three specialized companies behind SURE Group: SURE Mechanical, Cincinnati Air Conditioning Company, and Thermolinear.'],
  '/services/': ['HVAC Construction, Service, Fabrication & Environmental Control', 'Full-service commercial HVAC construction, design, fabrication, installation, process piping, building automation, and environmental control systems.'],
  '/industries/': ['Mechanical Systems for Demanding Facilities | SURE Group', 'Mechanical systems expertise for healthcare, education, government, commercial, industrial, laboratory, senior living, and utility facilities.'],
  '/projects/': ['Commercial HVAC & Mechanical Project Portfolio | SURE Group', 'Explore HVAC, mechanical construction, fabrication, service, and environmental control projects delivered by SURE Group companies.'],
  '/careers/': ['HVAC & Mechanical Construction Careers | SURE Group', 'Build your HVAC, sheet metal, pipefitting, welding, fabrication, engineering, or project management career with SURE Group.'],
  '/contact/': ['Contact SURE Group | Request HVAC Service or Project Support', 'Request a quote, schedule service, discuss custom fabrication, or connect with the right SURE Group company for your project.'],
};

export const companies = [
  {
    name: 'SURE Mechanical',
    slug: 'sure-mechanical',
    eyebrow: 'Certified minority-owned mechanical contractor',
    summary: 'Commercial HVAC and mechanical contractor specializing in mechanical design, fabrication, installation, engineering, sheet metal ductwork, hydronic piping, welding, BIM coordination, LEED/sustainable projects, and large-scale public and institutional work.',
    card: 'HVAC Construction, Fabrication, Installation, BIM',
    strengths: ['HVAC construction', 'Fabrication', 'Sheet metal ductwork', 'Hydronic piping', 'Welding', 'BIM', 'LEED/sustainable projects', 'Public/institutional work'],
  },
  {
    name: 'Cincinnati Air Conditioning Company',
    slug: 'cincinnati-air',
    eyebrow: 'Legacy design-build HVAC since 1938',
    summary: 'A design-build commercial and industrial HVAC company founded in 1938 with deep experience in engineered HVAC systems, process piping, building automation, commercial refrigeration, service, preventative maintenance, and custom mechanical systems.',
    card: 'Design-Build, Service, Process Piping, Automation',
    strengths: ['Design-build HVAC', 'Process piping', 'Building automation', 'Commercial refrigeration', 'Equipment service', 'Preventative maintenance', '24/7 support'],
  },
  {
    name: 'Thermolinear',
    slug: 'thermolinear',
    eyebrow: 'Custom environmental control systems',
    summary: 'A custom environmental control systems manufacturer specializing in modular environmental rooms, dry rooms, clean rooms, growth chambers, environmental chambers, custom heating/cooling equipment, installation, testing, and commissioning.',
    card: 'Clean Rooms, Dry Rooms, Growth Chambers, Environmental Control',
    strengths: ['Clean rooms', 'Dry rooms', 'Growth chambers', 'Modular environmental rooms', 'Environmental chambers', 'Testing and commissioning'],
  },
];

export const services = [
  ['HVAC Construction', 'Coordinated commercial HVAC construction for critical facilities, renovations, infrastructure upgrades, and complex occupied environments.', ['SURE Mechanical', 'Cincinnati Air']],
  ['Mechanical Design & Engineering', 'Engineering-led system planning, constructability input, and design-build support for performance, maintainability, and lifecycle value.', ['SURE Mechanical', 'Cincinnati Air']],
  ['Fabrication & Prefabrication', 'Sheet metal, piping, welding, and prefabricated assemblies that improve quality, shorten schedules, and reduce disruption on site.', ['SURE Mechanical']],
  ['Installation', 'Field installation teams experienced with hydronic piping, ductwork, equipment setting, rooftop units, AHUs, chillers, and building renovations.', ['SURE Mechanical', 'Cincinnati Air']],
  ['Equipment Services', 'Responsive commercial HVAC service, diagnostics, repairs, commissioning support, and system performance troubleshooting.', ['Cincinnati Air']],
  ['Service Agreements', 'Preventative maintenance and planned service programs built around uptime, energy performance, and facility risk reduction.', ['Cincinnati Air']],
  ['Process Piping', 'Commercial and industrial process piping support for manufacturing, institutional, and specialized mechanical environments.', ['Cincinnati Air', 'SURE Mechanical']],
  ['Building Automation', 'Control strategies and building automation support to connect equipment, sequences, monitoring, and long-term operations.', ['Cincinnati Air']],
  ['Custom Environmental Control Systems', 'Clean rooms, dry rooms, growth chambers, modular environmental rooms, and custom controlled-environment equipment.', ['Thermolinear']],
  ['Energy Assessments & Retrofits', 'System assessments, retrofit planning, and upgrades that improve reliability, efficiency, comfort, and maintainability.', ['SURE Group']],
];

export const industries = [
  ['Healthcare', 'Mechanical systems where patient comfort, infection control, uptime, and phased work in occupied facilities are mission critical.', ['Uptime', 'Redundancy', 'Indoor air quality', 'Infection control'], ['HVAC Construction', 'Chiller Plant', 'Service'], ['Cincinnati Children’s Hospital', 'The Christ Hospital Chiller Plant Conversion', 'UC Health Barrett Center 3rd Floor']],
  ['Education', 'HVAC and mechanical renovations that support learning environments, campus standards, budgets, and seasonal schedule constraints.', ['Phased renovations', 'Occupant comfort', 'Energy use', 'Schedule certainty'], ['HVAC Renovation', 'Hydronic Piping', 'Building Automation'], ['RELIS 2nd Floor Renovation']],
  ['Government', 'Public-sector mechanical work with documentation, coordination, safety, and accountable delivery at the center of the process.', ['Procurement requirements', 'Documentation', 'Durability', 'Safety'], ['HVAC Construction', 'Fabrication', 'Service'], ['Brown County ODOT Maintenance Facility']],
  ['Commercial', 'Design-build, retrofit, and service support for offices, mixed-use properties, banks, corporate campuses, and critical business facilities.', ['Tenant comfort', 'Maintainability', 'Energy performance', 'Business continuity'], ['Service', 'AHU/RTU', 'Building Automation'], ['Federal Reserve Bank', 'P&G MBC DS AHU Upgrades']],
  ['Industrial', 'Robust mechanical and process support for demanding production, logistics, laboratory, and equipment-intensive operations.', ['Process loads', 'Reliability', 'Safety', 'Custom systems'], ['Process Piping', 'Fabrication', 'Environmental Control'], ['P&G MBC DS AHU Upgrades']],
  ['Research & Laboratory', 'Precision environmental control, ventilation, specialty rooms, and commissioning-minded delivery for research environments.', ['Temperature control', 'Humidity control', 'Cleanliness', 'Commissioning'], ['Environmental Control', 'Building Automation', 'Service'], ['Thermolinear Environmental Rooms']],
  ['Senior Living', 'Comfort-focused mechanical systems for residential-care environments that still demand commercial-grade reliability and service.', ['Resident comfort', 'Indoor air quality', 'Low disruption', 'Maintenance access'], ['HVAC Construction', 'Service Agreements', 'Retrofits'], ['Regional senior living facilities']],
  ['Energy & Utilities', 'Mechanical and HVAC support for utility and energy environments where coordination, safety, and durable performance matter.', ['Secure access', 'Reliability', 'Site coordination', 'Critical infrastructure'], ['HVAC Construction', 'Service', 'Fabrication'], ['Duke Energy Queensgate TSS']],
];

export const projects = [
  ['Cincinnati Children’s Hospital', 'Healthcare', 'SURE Mechanical', ['Critical Facilities', 'HVAC Construction', 'Service'], 'Mechanical and HVAC support for a leading regional healthcare institution where reliability, comfort, and uptime are critical.'],
  ['Federal Reserve Bank', 'Institutional', 'Cincinnati Air', ['Secure Facility', 'Service', 'Building Automation'], 'HVAC and mechanical support for a high-security institutional facility requiring careful coordination and dependable system performance.'],
  ['The Christ Hospital Chiller Plant Conversion', 'Healthcare', 'SURE Mechanical', ['Chiller Plant', 'Hydronic Piping', 'HVAC Construction'], 'HVAC infrastructure upgrades including installation of a new water-cooled chiller and six cooling towers.'],
  ['UC Health Barrett Center 3rd Floor', 'Healthcare', 'SURE Mechanical', ['AHU/RTU', 'Hydronic Piping', 'Mechanical Systems'], 'Mechanical scope featuring a custom 80-ton roof-assembled AHU, fan arrays, chilled water systems, steam components, and ducted supply and return.'],
  ['RELIS 2nd Floor Renovation', 'Education', 'SURE Mechanical', ['Renovation', 'Hydronic Piping', 'VAV'], 'HVAC renovation for Princeton City School District administrative offices, including an air-cooled chiller, chilled water piping, pumps, and VAV boxes.'],
  ['Brown County ODOT Maintenance Facility', 'Government', 'SURE Mechanical', ['Public Sector', 'HVAC Construction', 'Fabrication'], 'Mechanical construction support for a public maintenance facility serving Ohio Department of Transportation operations.'],
  ['P&G MBC DS AHU Upgrades', 'Industrial', 'Cincinnati Air', ['Commercial', 'Industrial', 'AHU/RTU'], 'Commercial HVAC upgrades supporting reliable system performance in a demanding corporate and industrial facility environment.'],
  ['Duke Energy Queensgate TSS', 'Utility', 'SURE Mechanical', ['Energy', 'HVAC Construction', 'Service'], 'Mechanical and HVAC project support for a utility-sector facility, demonstrating experience across commercial and energy environments.'],
];

export const values = ['Engineering-Led Execution', 'Skilled Fabrication & Installation', 'Service Beyond the Build', 'Inclusive Workforce Development'];
export const coreValues = ['Integrity', 'Precision', 'Safety', 'Teamwork', 'Service', 'Inclusive Growth'];
export const timeline = [
  ['1938', 'Cincinnati Air Conditioning Company is founded'],
  ['2010', 'Chukwuma “Chuma” Ekwueme founds SURE Mechanical'],
  ['2025', 'SURE Mechanical acquires Cincinnati Air Conditioning Company and expands under SURE Group'],
  ['Today', 'SURE Group unites specialized mechanical companies under one standard'],
];
export const careers = ['HVAC Technicians', 'Sheet Metal Workers', 'Pipefitters', 'Welders', 'Fabricators', 'Project Managers', 'Estimators', 'Engineers', 'Apprentices', 'Operations'];

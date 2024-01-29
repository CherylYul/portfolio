import React from "react"
import Menu from "../assets/Menu/Menu"
import Dropdown from "../assets/Menu/MenuDropdown"
import MenuItem from "../assets/Menu/MenuItem"
import Falcon9Price from "../assets/spacex/falcon9.png"
import Falcon9Structure from "../assets/spacex/falcon9-structure.png"
import Falcon9Droneship from "../assets/spacex/falcon9-droneship.jpg"
import Launchsite1 from "../assets/spacex/launchsite-1.png"
import Launchsite2 from "../assets/spacex/launchsite-2.png"
import Customer1 from "../assets/spacex/customer-1.png"
import Booster1 from "../assets/spacex/booster-1.png"
import Boosterlanding1 from "../assets/spacex/boosterlanding-1.png"
import Relationship1 from "../assets/spacex/relationship-1.png"
import Relationship2 from "../assets/spacex/relationship-2.png"
import Relationship3 from "../assets/spacex/relationship-3.png"
import Prediction1 from "../assets/spacex/prediction-1.png"

export default function SpaceX() {
    return (
        <div className="content-container">
            <div className="proj-header">
                <h1 className="proj-title">SpaceX first landing prediction</h1>
                <div className="proj-sub">
                    <small>Jan 19 2024 • YulCheryl</small>
                    <a className="proj-github-link cfd9de-border" target="_blank" rel="noreferrer"
                    href="https://github.com/CherylYul/spacex-first-stage-landing-prediction">
                        <i className="bi bi-github"></i>
                        View repository
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                </div>
            </div>

            <div className="proj-summary quote-container">
                <h3>Summary</h3>
                <p>SpaceX offers a competitive price for its Falcon 9, priced at only 67 million dollars, 
                    in contrast to other providers (whose costs exceed 150 million dollars each). This 
                    advantageous price is achieved by reusing the rocket's first stage. Hence, this 
                    project aims to predict the success rate of landing the first stage after a rocket 
                    launch.</p>
                <p>The results obtained reached an impressive 91.57%, utilizing features such as payload 
                    mass, orbit, serial number, grid fins, legs, blocks, and landing pad in the analysis 
                    and predictions. We can then apply the explored data and predicted results to future 
                    rocket launch projects. This information is valuable for new providers entering the 
                    rocket space market and serves as useful insights for venture capitalists making 
                    investment decisions.</p>
            </div>

            <p>"SpaceX First Landing Prediction" is the capstone project of <a href="https://www.coursera.org/professional-certificates/ibm-data-science" target="_blank" rel="noreferrer">IBM Data Science Professional Course</a>, which 
            I recently completed. This course imparts fundamental and essential skills, providing 
            comprehensive knowledge about data science, ranging from visualizing data to building ML 
            pipeline models. If you are seeking a way to enter the field of data science or aiming for a 
            thorough overview of it, then this course is not a bad choice.</p>

            <Menu title="Table of contents">
                <Dropdown>
                    <MenuItem>Part I: Understanding Problems</MenuItem>
                    <MenuItem>Part II: Data Approachs</MenuItem>
                    <MenuItem>----Collecting data from SpaceX API</MenuItem>
                    <MenuItem>----Collecting data from Wikipedia</MenuItem>
                    <MenuItem>Part III: Exploring Data</MenuItem>
                    <MenuItem>----1. How does launch site affect landing status?</MenuItem>
                    <MenuItem>----2. Frequent clients of SpaceX</MenuItem>
                    <MenuItem>----3. Which version of the booster has the highest success rate?</MenuItem>
                    <MenuItem>----4. Which type of booster landing has the highest success rate?</MenuItem>
                    <MenuItem>----5. Exploring the relationships between features and the landing success rate..</MenuItem>
                    <MenuItem>Part IV: Future Launch Prediction</MenuItem>
                    <MenuItem>Conclusion</MenuItem>
                    <MenuItem>Resources</MenuItem>
                </Dropdown>
            </Menu>

            <h2>Part I: Understanding Problems</h2>
            <p>Space has mostly been dominated by governments for the last 50 to 60 years until 
                billionaires stepped in and gained some success in space. As space is becoming a potential 
                source of value for businesses across a wide variety of sectors, including agriculture, 
                telecommunications, pharmaceuticals, etc., many space companies are hoping to make it not 
                only possible but also affordable to put objects into orbit. As a result, a race against 
                time to reduce the cost of launching rockets is happening.</p>
            
            <p>Virgin Galactic provides suborbital spaceflights, Rocket Lab offers Electronic and Neutron 
                rockets, Blue Origin manufactures suborbital and orbital reusable rockets, and SpaceX 
                sends spacecraft to the International Space Station and StarLink to provide satellite 
                Internet access. Among them, SpaceX is the clear leader with its Falcon 9, Falcon Heavy, 
                and Falcon Super Heavy rockets.</p>

            <div className="image-container">
                <img src={Falcon9Price} style={{width: "100%"}}
                    alt="capabilities and services of Falcon9 from spacex.com" />
                <p className="italic center">
                    Capabilities and services of Falcon 9 from spacex.com
                </p>
            </div>

            <p>The Falcon 9 is a two-stage launch vehicle, including the first stage, interstage, second 
                stage, and fairings. The first stage is connected to the second stage by the interstage. 
                After the rocket launches, stage separation occurs when the Falcon has left Earth's 
                atmosphere. The first stage engines shut down, and a boostback and entry burn are 
                performed to make it land back on the ground. Sometimes, the first stage lands 
                successfully, helping decrease the cost of each rocket launch (67 million dollars) by 
                reusing the first stage. Other times, it might crash or fail in landing.</p>

            <div className="image-container">
                <img src={Falcon9Structure} className="img-60"
                    alt="Falcon 9 structure of first stage and second stage" />
                <p className="italic center">
                    The structure of Falcon 9 including first stage and second stage 
                    - picture from Finbarr Sheehy
                </p>
            </div>

            <p>With high pressure released from the first stage, the second stage continues to fly and 
                then moves to the fairing and payload separation (payload is enclosed in the fairings). 
                Stage two, or the second stage, helps bring the payload to orbit, but most of the work 
                is done by the first stage, which is much larger and more expensive than the second stage. 
                Therefore, the act of recovering the first stage by ensuring it will land successfully is 
                becoming more and more crucial.</p>

            <p>If we can accurately predict the likelihood of whether the first stage will land or not and 
                understand the impact of each feature contributing to the launching mission, the market 
                space will be significantly improved as the cost of satellites and other objects sent to 
                orbit will be lower.</p>

            <h2>Part II: Data Approachs</h2>
            
            <p>The data were gathered from <a href="https://github.com/r-spacex/SpaceX-API" target="_blank" rel="noreferrer">SpaceX-API</a> and the <a href="https://en.wikipedia.org/wiki/List_of_Falcon_9_and_Falcon_Heavy_launches" target="_blank" rel="noreferrer">
            List of Falcon 9 and Falcon Heavy on Wikipedia</a> using BeautifulSoup and requests.</p>

            <h3>Collecting data from SpaceX API</h3>

            <p>1. Get the name and cost per launch in rockets path:</p>

            <div className="code-container">
                <code>def get_rockets_data(x):</code>
                <code className="pl-3">url = "https://api.spacexdata.com/v4/rockets/" + str(x)</code>
                <code className="pl-3">r = requests.get(url).json()</code>
                <code className="pl-3">return r["name"], r["cost_per_launch"]</code>
            </div>

            <p>2. Get the latitude and longitude in launchpads path:</p>

            <div className="code-container">
                <code>def get_launchpads_data(x):</code>
                <code className="pl-3">url = "https://api.spacexdata.com/v4/launchpads/" + str(x)</code>
                <code className="pl-3">r = requests.get(url).json()</code>
                <code className="pl-3">return r["full_name"], r["latitude"], r["longitude"]</code>
            </div>

            <p>3. Get customers, orbit and mass in payloads path:</p>

            <div className="code-container">
                <code>def get_payloads_data(x):</code>
                <code className="pl-3">url = "https://api.spacexdata.com/v4/payloads/" + str(x)</code>
                <code className="pl-3">r = requests.get(url).json()</code>
                <code className="pl-3">return r["customers"], r["mass_kg"], r["orbit"], r["manufacturers"]</code>
            </div>  

            <p>4. Get block and serial in cores path:</p>

            <div className="code-container">
                <code>def get_cores_data(x):</code>
                <code className="pl-3">url = "https://api.spacexdata.com/v4/cores/" + str(x)</code>
                <code className="pl-3">r = requests.get(url).json()</code>
                <code className="pl-3">return r["block"], r["reuse_count"], r["serial"]</code>
            </div>

            <p>5. Access the main path which contains several information of each flight:</p>

            <div className="code-container">
                <code>r = requests.get("https://api.spacexdata.com/v4/launches/past").json()</code>
                <code>for flight in r:</code>
                <code className="pl-3">name, cost_per_launch = get_rockets_data(flight["rocket"])</code>
                <code className="pl-3">launch_site, latitude, longitude = get_launchpads_data(flight["launchpad"])</code>
                <code className="pl-3">customers, mass, orbit, manufacturers = get_payloads_data(flight["payloads"][0])</code>
                <code className="pl-3">block, reuse_count, serial = get_cores_data(flight["cores"][0]["core"])</code>
            </div>

            <h3>Collecting data from Wikipedia</h3>

            <p>This time we use BeautifulSoup and access contents through CSS selector.</p>
            <p>1. Collect the columns name, and get rid of the br and sup tag: </p>

            <div className="code-container">
                <code>url = "https://en.wikipedia.org/wiki/List_of_Falcon_9_and_Falcon_Heavy_launches"</code>
                <code>r = requests.get(url)</code>
                <code>html_soup = BeautifulSoup(r.text, "html.parser")</code>
                <code>tables = html_soup.select("table.wikitable{`>`}tbody")</code>
                <code>columns = []</code>
                <code>for column in tables[0].find_all("th", scope="col"):</code>
                <code className="pl-3">if column.sup:</code>
                <code className="pl-6">column.sup.extract()</code>
                <code className="pl-3">if column.br:</code>
                <code className="pl-6">column.br.extract()</code>
                <code className="pl-3">column_name = column.get_text(strip=True).replace(",", "").replace(" ", "")</code>
                <code className="pl-3">columns.append(column_name)</code>
            </div>

            <p>2. Handle the date and mass cell by using unicodedata and regex:</p>

            <div className="code-container">
                <code>def get_date(cell):</code>
                <code className="pl-3">datetime = cell.get_text(strip=True)</code>
                <code className="pl-3">datetime = re.search("[^,]+", datetime)</code>
                <code className="pl-3">datetime = cell.get_text(strip=True)</code>
            </div>

            <div className="code-container">
                <code>def get_mass(cell)</code>
                <code className="pl-3">mass = unicodedata.normalize("NFKD", cell.text).strip()</code>
                <code className="pl-3">if mass:</code>
                <code className="pl-6">mass.find("kg")</code>
                <code className="pl-6">new_mass = mass[0 : mass.find("kg") + 2]</code>
                <code className="pl-3">else:</code>
                <code className="pl-6">new_mass = 0</code>
                <code className="pl-3">return new_mass</code>
            </div>

            <p>3. Collect the data: </p>

            <div className="code-container">    
                <code>r = requests.get(url)</code>
                <code>html_soup = BeautifulSoup(r.text, "html.parser")</code>
                <code>rows = html_soup.select("table.wikitable tr[id]")</code>
                <code>for row in rows:</code>
                <code className="pl-3">if row.find("th", scope="row"):</code>
                <code className="pl-6"> ... scrape all data to dataframe ... </code>
            </div>

            <p>Upon collection, we transform the data into a dataframe, addressing missing values and 
                invalid data using pandas and numpy. Finally, we ensure the data is in the correct types 
                and format.</p>
            
            <h2>Part III: Exploring Data</h2>
            
            <p>Our data exploration involves three key methods. Firstly, we leverage the sqlite3 library 
                and use SQL magic to conduct feature analysis and analyze launches from 2022. Secondly, 
                we employ seaborn and matplotlib to comprehend the relationships between various features. 
                For instance, we explore the correlation between flight number and payload mass, as well 
                as the connection between orbit and success rate. This step aids us in feature extraction 
                for subsequent prediction tasks. Additionally, we conduct an analysis of launch sites 
                using folium, allowing us to visualize the locations of each launch site on the map and 
                calculate their distances.</p>

            <h3 >1. How does launch site affect landing status?</h3>

            <p>SpaceX utilizes three primary launch sites: CCSFS SLC-40 with a total of 115 flights, 
                KSC LC-39A with 57 flights, and VSFB SLC-4E with 36 flights. Notably, CCSFS SLC-40 is 
                predominantly used for research and development (R&D) activities, contributing to its 
                comparatively higher failure rate. In contrast, KSC LC-39A boasts the highest successful 
                rate at 91.22% during the period from 2010 to 2022.</p>

            <div className="note-container">
                <p>CCSFS: Cape Canaveral Space Force Station</p>
                <p>VSFB: Vandenberg Space Force Base, previously Vandenberg Air Force Base (VAFB)</p>
                <p>KSC: John F.Kennedy Space Center</p>
            </div>

            <div className="code-container">    
                <code>%%sql</code>
                <code>select launchsite, landingstatus, count(launchsite) as LaunchTotal</code>
                <code>from spacexlaunch</code>
                <code>group by launchsite, landingstatus</code>
            </div>

            <div className="image-container">
                <img src={Launchsite1} className="img-45"
                    alt="The number of success and failure of first stage landing in SpaceX 3 
                    launch sites - CCSFS SLC-40, KSC LC-39A, VSFB SLC-4E" />
                <p className="italic center">
                    The number of success and failure of first stage landing in SpaceX 3 launch sites -
                    CCSFS SLC-40, KSC LC-39A, VSFB SLC-4E
                </p>
            </div>
            
            <p>The majority of ocean landings occurred at CCSFS (5 flights) with a success rate of 80%. 
                Additionally, VSFB experienced 2 ocean landings, while KSC did not have any ocean landings 
                but achieved the highest successful rate for drone ship landings. Notably, there was only 
                one failure of landing on the ground, which took place at the CCSFS site.</p>

            <div className="image-container">
                <img src={Falcon9Droneship} style={{width: "100%"}}
                    alt="SpaceX's drone ship landing - A Shortfall of Gravitas - Amy Thompson" />
                <p className="italic center">
                    SpaceX's drone ship landing "A Shortfall of Gravitas", 
                    after its first successful Falcon 9 rocket landing. 
                    (Image credit: Amy Thompson)
                </p>
            </div>

            <p>CCSFS SLC-40 stands out as the launch site with the highest number of launches, making it 
                logical that it accommodated a diverse range of orbit launches that other sites had not 
                attempted. Nevertheless, the remaining sites also boasted distinctive features. KSC, for 
                instance, hosted one sub-orbital launch, while VSFB included one Heliocentric orbit, a 
                category not yet explored by CCSFS. Upon closer inspection, it becomes evident that a 
                significant portion of Sun-Synchronous Orbit (SSO) and Polar Orbit (PO) launches 
                originated specifically from the VSFB launch site.</p>

            <div className="note-container">
                <p>LEO: Low Earth Orbit, an orbit around Earth with a period of 128 minutes or less, 
                altitude 2000 km, most of artificial objects in outer space are LEO. ISS are the largest 
                international Space Station in LEO</p>
                <p>MEO: Medium Earth Orbit, an altitude above a low Earth orbit (LEO) and below a high 
                Earth orbit (HEO) – between 2,000 and 35,786 km</p>
                <p>GTO: Geosynchronous Orbit, a high Earth orbit that allows satellites to match Earth's 
                rotation. Located at 22,236 miles (35,786 kilometers) above Earth's equator, this position 
                is a valuable spot for monitoring weather, communications and surveillance.</p>
                <p>HEO: High Earth Orbit, a geocentric orbit with an altitude entirely above that of a 
                geosynchronous orbit (35,786 kilometres)</p>
                <p>Heliocentric: an orbit around the barycenter of the Solar System, which is usually 
                located within or very near the surface of the Sun</p>
                <p>PO: Polar Orbit, a satellite passes above or nearly above both poles of the body 
                being orbited</p>
                <p>SSO: Sun-synchronous Orbit, a heliosynchronous orbit is a nearly polar orbit around 
                a planet, in which the satellite passes over any given point of the planet's surface at 
                the same local mean solar time</p>
                <p>BLT: Ballistic Capture, a low energy method for a spacecraft to achieve an orbit 
                around a distant planet or moon with no fuel required to go into orbit</p>
                <p>Sub-orbital: a spaceflight in which the spacecraft reaches outer space, but its 
                trajectory intersects the atmosphere or surface of the gravitating body from which it 
                was launched, so that it will not complete one orbital revolution (it does not become 
                an artificial satellite)</p>
                <p>ES-L1: Sun-Earth-L1, the satellite launched into orbit toward Sun Earth Lagrange L1 
                point</p>
            </div>
            
            <p>When employing the Folium library to visualize the launch site locations, the map 
                illustrates that VAFB is situated near the west coast of California, while CCSFS is in 
                close proximity to KSC, with just a 5km separation; both are positioned along the east 
                coast of Florida. NASA Johnson Space Center lies between the two states, situated near 
                Houston, Texas.</p>

            <div className="code-container">    
                <code>launch_site_info = spacex_df[['launch site', 'longitude', 'latitude']]</code>
                <code>launch_site_info = launch_site_info.groupby('launch site', as_index=False).first()</code>
                <code>for index, row in launch_site_info.iterrows():</code>
                <code className="pl-3">coordinate = [row[2], row[1]]</code>
                <code className="pl-3">launchsite = row[0]</code>
                <code className="pl-3">circle = folium.Circle(coordinate, radius=1000, color='#69140E', fill=True)</code>
                <code className="pl-3">circle = circle.add_child(folium.Popup(launchsite))</code>
                <code className="pl-3">marker = folium.map.Marker(</code>
                <code className="pl-6">coordinate,</code>
                <code className="pl-6">icon = DivIcon(icon_size=(20,20),</code>
                <code className="pl-9">icon_anchor=(0,0),</code>
                <code className="pl-9">{`html='<div style="color: #69140E; font-size: 12"><b>%s</b></div>' % launchsite)`}</code>
                <code className="pl-3">)</code> 
                <code className="pl-3">site_map.add_child(circle)</code>
                <code className="pl-3">site_map.add_child(marker)</code>
            </div>

            <div className="image-container">
                <img src={Launchsite2} style={{width: "100%"}}
                    alt="The presentation of SpaceX's launch sites map by using Folium library" />
                <p className="italic center">
                    The presentation of SpaceX's launch sites map using Folium library
                </p>
            </div>

            <p>Launch sites are strategically located near coastlines, offering the advantage of launching 
                rockets over the ocean. This positioning provides the crew with the option to abort a 
                launch, attempting a water landing, and helps minimize risks associated with falling 
                debris. Additionally, proximity to railways and highways facilitates the easy transport of 
                heavy cargo and equipment. However, the sites are intentionally situated far from 
                populated areas to mitigate the potential dangers of rocket launches to densely populated 
                regions.</p>

            <p>Another notable feature is the proximity of all launch sites to the equator. This design 
                choice aligns with the physics of Earth's rotation, requiring less fuel to reach space 
                from the equator.</p>

            <h3 >2. Frequent clients of SpaceX</h3>

            <p>The statistics reveal that NASA, SpaceX, SES, and Iridium Communications are the top 
                customers for SpaceX. NASA is the most prominent with a total of 46 flights, with 
                NASA(CRS) accounting for 26 flights but a lower total payload of 71,326 kgs compared to 
                NASA(CTS), which has 6 flights with a total payload of 77,050 kgs. The average payload 
                mass for each flight of NASA(CRS) is 2,743 kgs. The majority of NASA flights are part of 
                the CRS projects, serving as a contractual solution to deliver cargo and supplies to the 
                International Space Station (ISS).</p>
            
            <div className="note-container">
                <p>SES: Luxembourgish leading satellite telecommunications network provider with over 70 
                satellites in two different orbits.</p>
                <p>Iridium communications: Iridium operates the Iridium satellite constellation, a 
                system of 66 active satellites and nine in-orbit spares used for worldwide voice and data 
                communication from handheld satellite phones, satellite messenger communication devices 
                and integrated transceivers.</p>
                <p>NASA: the National Aeronautics and Space Administration which is an independent agency 
                of the U.S. federal government responsible for the civil space program, aeronautics 
                research, and space research</p>
            </div>

            <p>LEO orbit is the primary trajectory for NASA, with a high success rate of 70%. On the 
                other hand, Iridium and SES focus on PO and GTO orbit launches, with average payload 
                masses of around 9,600 kg and 4,600 kg, respectively.</p>

            <div className="code-container">    
                <code>%%sql</code>
                <code>select customer, count(customer) as TotalFlight</code>
                <code>from spacexlaunch</code>
                <code>group by customer</code>
                <code>order by TotalFlight desc</code>
                <code>limit 5</code>
            </div>

            <div className="image-container">
                <img src={Customer1} className="img-40"
                    alt="The top customers of SpaceX - SpaceX, NASA, SES, Iridium Communications" />
                <p className="italic center">
                    The top customers of SpaceX - SpaceX, NASA, SES, Iridium Communications
                </p>
            </div>

            <h3 >3. Which version of the booster has the highest success rate?</h3>

            <p>The Falcon 9 boasts five booster versions: v1.0, v1.1, FT, Block 4, and Block 5. Among 
                these, Block 5 has been the most prolific, with 152 flights, making it SpaceX's most 
                active rocket. Block 5 can carry payloads ranging from 325 kgs to 17,400 kgs, boasting 
                an impressive average payload mass of 10,625 kgs and an outstanding success rate of 94%.
                </p>

            <p>In contrast, v1.0 and v1.1 tell a different story. The initial version, v1.0, experienced 
                no successful flights, while most of v1.1's flights ended in failure. The subsequent 
                developments in the Falcon 9 family, F9 B4 and F9 FT, fared better for commercial 
                launches, achieving success rates of 50% and 75%, respectively. However, they still fall 
                short when compared to the success of F9 Block 5.</p>

            <div className="code-container">    
                <code>%%sql</code>
                <code>select boosterversion, landingstatus, count(boosterversion) as TotalFlights</code>
                <code>from spacexlaunch</code>
                <code>group by boosterversion, landingstatus</code>
            </div>

            <div className="image-container">
                <img src={Booster1} className="img-50"
                    alt="The number of successful and failure flights of SpaceX Falcon 9 family " />
                <p className="italic center">
                    The number of successful and failure flights of SpaceX Falcon 9 family 
                </p>
            </div>

            <h3>4. Which type of booster landing has the highest success rate?</h3>

            <p>The central landing method that SpaceX has focused on is the drone ship, accounting for 
                a total of 145 flights with a success rate of 93.79%.</p>

            <div className="note-container">
                <p>Controlled (ocean): the ocean test controlled descent, for the sole purpose of 
                gathering test data, such boosters were destroyed at sea. </p>
                <p>Uncontrolled (ocean): failure test, ocean touchdown control failed.</p>
                <p>Drone ship: land on a drone ship at sea</p>
                <p>Ground pad: land on a ground pad near the launch site</p>
                <p>Failure parachute: attempt to recover the first stage by parachuting it into the ocean 
                but fail</p>
            </div>

            <div className="code-container">    
                <code>%%sql</code>
                <code>select boosterlanding, count(boosterlanding) as LaunchTotal</code>
                <code>from spacexlaunch</code>
                <code>group by boosterlanding</code>
            </div>

            <div className="image-container">
                <img src={Boosterlanding1} className="img-40"
                    alt="The number of successful and failure flights of SpaceX based on booster landing" />
                <p className="italic center">
                    The number of successful and failure flights of SpaceX based on booster landing
                </p>
            </div>

            <h3>5. Exploring the relationships between features and the landing success rate.</h3>

            <p>As the flight number increases, there is a noticeable trend of the first stage successfully 
                landing. The data indicates that almost all flights numbered above 100 were launched 
                without any failures. However, an increase in payload mass makes it less likely for the 
                first stage to land safely. Visualization illustrates that payload masses below 16,000 kgs 
                are more likely to achieve success.</p>

            <div className="image-container">
                <img src={Relationship1} style={{width: "100%"}}
                    alt="The relationship between flight number and payload mass" />
                <p className="italic center">
                    The relationship between flight number and payload mass
                </p>
            </div>

            <p>Different launch sites exhibit varying success rates. Initially, SpaceX's primary launch 
                site was CCSFS. Between flight numbers 30 and 50, SpaceX expanded to include VSFB and KSC 
                launch sites, with only VSFB achieving a 100% success rate during that period. Since 
                flight number 130, SpaceX has evenly distributed launches across all three locations.</p>

            <div className="image-container">
                <img src={Relationship2} style={{width: "100%"}}
                    alt="The relationship between flight number and launch sites" />
                <p className="italic center">
                    The relationship between flight number and launch sites
                </p>
            </div>

            <p>Additionally, we explore the relationship between flight number and orbit. In VLEO, MEO, 
                and LEO orbits, a higher flight number correlates with a greater likelihood of the first 
                stage landing safely. Conversely, there appears to be no discernible relationship between 
                flight number and GTO orbit success.</p>

            <div className="image-container">
                <img src={Relationship3} style={{width: "100%"}}
                    alt="The relationship between flight number and orbits" />
                <p className="italic center">
                    The relationship between flight number and orbits
                </p>
            </div>

            {/* The 2 important features launch sites and payload mass also be showed on python plotly 
            dashboard to enable others explore and manipulate data in an interactive and real-time way. */}

            <h2>Part IV: Future Launch Prediction</h2>

            <p>Drawing insights from detailed data on launch features, collected, cleaned, and explored 
                in previous steps, we leverage the well-designed sklearn library to predict the success 
                rate of first-stage landings. The process involves standardizing data and splitting it 
                into training and test sets, with a test size of 20%.</p>
            
            <p>1. Logistic Regression Model</p>

            <div className="code-container">    
                <code>{`parameters = {`}</code>
                <code className="pl-3">'C': [0.01, 0.1, 1],</code>
                <code className="pl-3">'penalty': ['l2'],</code>
                <code className="pl-3">'solver': ['lbfgs']</code>
                <code>{`}`}</code>
                <code>LR = LogisticRegression()</code>
                <code>LR_model = GridSearchCV(LR, parameters, cv=10)</code>
                <code>LR_model.fit(x_train, y_train)</code>
            </div>

            <p>2. Support Vector Machine</p>

            <div className="code-container">    
                <code>{`parameters = {`}</code>
                <code className="pl-3">'kernel': ['linear', 'rbf', 'poly', 'sigmoid'],</code>
                <code className="pl-3">'C': np.logspace(-3, 3, 5),</code>
                <code className="pl-3">'gamma': np.logspace(-3, 3, 5)</code>
                <code>{`}`}</code>
                <code>SVM = SVC()</code>
                <code>SVM_model = GridSearchCV(SVM, parameters, cv=10)</code>
                <code>SVM_model.fit(x_train, y_train)</code>
            </div>

            <p>3. Decision Tree</p>

            <div className="code-container">    
                <code>{`parameters = {`}</code>
                <code className="pl-3">'criterion': ['gini', 'entropy'],</code>
                <code className="pl-3">'splitter': ['best', 'random'],</code>
                <code className="pl-3">'max_depth': [2*n for n in range(1,10)],</code>
                <code className="pl-3">'max_features': ['auto', 'sqrt'],</code>
                <code className="pl-3">'min_samples_leaf': [1,2,4],</code>
                <code className="pl-3">'min_samples_split': [2,5,10]</code>
                <code>{`}`}</code>
                <code>tree = DecisionTreeClassifier()</code>
                <code>tree_model = GridSearchCV(tree, parameters, cv=10)</code>
                <code>tree_model.fit(x_train, y_train)</code>
            </div>

            <p>4. K-nearest neighbors</p>

            <div className="code-container">    
                <code>{`parameters = {`}</code>
                <code className="pl-3">"n_neighbors": [1,2,3,4,5,6,7,8,9,10],</code>
                <code className="pl-3">"algorithm": ['auto', 'ball_tree', 'kd_tree', 'brute'],</code>
                <code className="pl-3">"p": [1,2]</code>
                <code>{`}`}</code>
                <code>KNN = KNeighborsClassifier()</code>
                <code>KNN_model = GridSearchCV(KNN, parameters, cv=10)</code>
                <code>KNN_model.fit(x_train, y_train)</code>
            </div>

            <p>Employing hyperparameter tuning, we focus on training data using four main types of models: 
                logistic regression, support vector machine, decision tree classifier, and k-nearest 
                neighbors classifier. The results are remarkably satisfying, with an accuracy rate of up 
                to 92%, as depicted in the image below.</p>

            <div className="image-container">
                <img src={Prediction1} style={{width: "100%"}}
                    alt="The accuracy of predicting the outcome of first stage landing in the train 
                    and test data set for 4 models (logistic regression, support vector machine, 
                    decision tree and k-nearest neighbors)" />
                <p className="italic center">
                    The accuracy of predicting the outcome of first stage landing in the train 
                    and test data set for 4 models (logistic regression, support vector machine, 
                    decision tree and k-nearest neighbors)
                </p>
            </div>
            
            <p>Overfitting explains why the decision tree has the highest score (94%) in the training 
                set but the lowest score in the test set (69%). Consequently, the support vector machine 
                emerges as the top model with a stable score of 92% in both the training and test sets.</p>

            <p>This 92% accuracy is just a starting point, as SpaceX continually improves reusable rockets, 
                aiming to minimize the cost of space access and offer more affordable flights for diverse 
                customers.</p>

            <h2>Conclusion</h2>
            
            <p>It has been a lot of fun reading a wide range of documents related to the Falcon 9 rocket, 
                as well as applying the accumulated knowledge after completing the course and eventually 
                presenting it here. There is so much to explore about the vastness of space, and there 
                are many awesome data scientists out there. I acknowledge that this report may still have 
                some shortcomings. Therefore, I would be grateful to receive suggestions to expand ideas, 
                enrich the content, and enhance the code.</p>

            <h2>Resources</h2>

            <ul className="resources">
                <li><a href="https://www.spacex.com/media/falcon-users-guide-2021-09.pdf" target="_blank" rel="noreferrer">SpaceX Falcon User's Guide</a></li>
                <li><a href="https://www.spacex.com/media/Capabilities&Services.pdf" target="_blank" rel="noreferrer">SpaceX Falcon 9 CAPABILITIES & SERVICES</a></li>
                <li><a href="https://www.sphericalinsights.com/reports/space-exploration-market" target="_blank" rel="noreferrer">Global Space Exploration Market</a></li>
                <li><a href="https://github.com/r-spacex/SpaceX-API" target="_blank" rel="noreferrer">SpaceX-API</a></li>
                <li><a href="https://en.wikipedia.org/wiki/List_of_Falcon_9_and_Falcon_Heavy_launches" target="_blank" rel="noreferrer">List of Falcon 9 and Falcon Heavy Launches 2020-2023</a></li>
                <li><a href="https://en.wikipedia.org/wiki/List_of_Falcon_9_and_Falcon_Heavy_launches_(2010%E2%80%932019)" target="_blank" rel="noreferrer">List of Falcon 9 and Falcon Heavy Launches 2010-2019</a></li>
            </ul>

            <div className="end"></div>
        </div>
    )
}
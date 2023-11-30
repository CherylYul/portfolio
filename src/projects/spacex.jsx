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
                    <small>Mar 9 2023 • YulCheryl</small>
                    <a className="proj-github-link cfd9de-border" target="_blank" rel="noreferrer"
                    href="https://github.com/CherylYul/spacex-first-stage-landing-prediction">
                        <i className="bi bi-github"></i>
                        View repository
                        <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                </div>
            </div>

            <div className="proj-summary quote-container">
                <h3>Summary</h3>
                <p>SpaceX offers competitive price for its Falcon 9, only 67 million dollars comparing 
                to other providers (more than 150 million dollars each). This advantage price can be 
                obtained by reusing the first stage of rocket. Hence, this project aims to predict 
                the successful rate of landing the first stage after launching rocket.</p>
                <p>The results obtained was up to 91.57% with the features used in analysis and 
                predictions are payload mass, orbit, serial, grid fins, legs, blocks, and landing pad. 
                We then can apply the explored data and predicted results for future rocket launch 
                projects, for new providers who want to step into rocket space market as an useful 
                information, or for venture capitalists to make further decision in their investment.</p>
            </div>

            <p>SpaceX first landing prediction is the capstone project of <a href="https://www.coursera.org/professional-certificates/ibm-data-science" target="_blank" rel="noreferrer">IBM Data Science Professional Course</a> which 
            I have finished recently. This course provides fundamental and essential skills with overall 
            knowledge about data science from visualizing data to building ML pipeline models. If you are 
            finding the way to step into data science field or to gain an exhaustive overview of it, then 
            this course is not the bad choice.</p>

            <Menu title="Table of contents">
                <Dropdown>
                    <MenuItem>Part I: Understanding Problems</MenuItem>
                    <MenuItem>Part II: Data Approachs</MenuItem>
                    <MenuItem>----Collecting data from SpaceX API</MenuItem>
                    <MenuItem>----Collecting data from Wikipedia</MenuItem>
                    <MenuItem>Part III: Exploring Data</MenuItem>
                    <MenuItem>----1. How does launch site affect landing status?</MenuItem>
                    <MenuItem>----2. The common customers of SpaceX</MenuItem>
                    <MenuItem>----3. Which does the version of booster have the highest successful rate?</MenuItem>
                    <MenuItem>----4. Which type of booster landing has a high success rate?</MenuItem>
                    <MenuItem>----5. Finding the relationships between features with landing success rate.</MenuItem>
                    <MenuItem>Part IV: Future Launch Prediction</MenuItem>
                    <MenuItem>Conclusion</MenuItem>
                    <MenuItem>Resources</MenuItem>
                </Dropdown>
            </Menu>

            <h2>Part I: Understanding Problems</h2>
            <p>Space has mostly been dominated by governments for the last 50 and 60 years ago until 
            billionaires step into and gain some success in space. As space is becoming a potential 
            source of value for businesses across a wide variety of sectors, including agriculture, 
            telecommunications, pharmaceuticals, etc, many space companies are hoping to make it not 
            only just possible but also affordable to put objects into orbit. As a result, a race against 
            time to reduce the cost of launching rockets is happening.</p>
            
            <p>Virgin Galactic is providing suborbital spaceflights, Rocket Lab provides Electronic 
            and Neutron rockets, Blue Origin manufactures sub-orbital and orbital reusable rockets, 
            SpaceX sends spacecraft to the International Space Station and StarLink to provide satellite 
            Internet access. Among them, SpaceX is the clear leader with its Falcon 9, Falcon Heavy and 
            Falcon Super Heavy rockets. </p>

            <div className="image-container">
                <img src={Falcon9Price} style={{width: "100%"}}
                    alt="capabilities and services of Falcon9 from spacex.com" />
                <p className="italic center">
                    Capabilities and services of Falcon 9 from spacex.com
                </p>
            </div>

            <p>Falcon 9 is a two-stage launch vehicle powered including first stage, interstage, second 
            stage and fairings. The first stage is matched with the second stage by the interstage. After 
            the rocket launches, the stage seperation happens when the falcon has left the Earth's 
            atmosphere, the first stage engines shut down, boostback and entry burn to make it landed back 
            on the ground. Sometimes, the first stage landed successfully which helps decrease the cost of
            everytime launching rocket (67 million dollars) by reusing the first stage. Other times, it 
            would crash or fail in landing.</p>

            <div className="image-container">
                <img src={Falcon9Structure} className="img-60"
                    alt="Falcon 9 structure of first stage and second stage" />
                <p className="italic center">
                    The structure of Falcon 9 including first stage and second stage 
                    - picture from Finbarr Sheehy
                </p>
            </div>

            <p>With a high pressure released from the first stage, the second stage continue to fly and
            then move to the fairing and payload seperation (payload is enclosed in the fairings). Stage 
            two, or the second stage, helps bring the payload to orbit, but most of the work is done by 
            the first stage which is much larger and more expensive than the second stage. Therefore, the 
            act of recovering the first stage by making sure it will land successfully is more and more
            crucial.</p>

            <p>If we can accurately predict the likelihood of whether the first stage will land or not, 
            and understand the impact of each feature contributing to the launching mission, the market 
            space will be improved significantly as the cost of satellites and other objects sended to 
            orbit will be lower.</p>

            <h2>Part II: Data Approachs</h2>
            
            <p>The data are collected from <a href="https://github.com/r-spacex/SpaceX-API" target="_blank" rel="noreferrer">SpaceX-API</a> and <a href="https://en.wikipedia.org/wiki/List_of_Falcon_9_and_Falcon_Heavy_launches" target="_blank" rel="noreferrer">
            List of Falcon 9 and Falcon Heavy on Wikipedia</a> by using BeautifulSoup and requests.</p>

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

            <p>After collecting, we convert data into dataframe and handle missing value, invalid data by
            using pandas and numpy, finally turn data into the right types and format.</p>
            
            <h2>Part III: Exploring Data</h2>
            
            <p>We explore data by 3 methods. Firstly, utilize sqlite3 library and using sql magic to 
            do feature analysis and analyze the 2022 launches. Secondly, using seaborn and matplotlib 
            to understand the relationships between features, for example flight number with payload mass, 
            orbit with success rate to help us do feature extraction for further prediction. We also 
            conduct launch sites analysis by using folium to visualize the location of each launch site 
            on the map and calculate the distance from it.</p>

            <h3 >1. How does launch site affect landing status?</h3>

            <p>SpaceX has 3 main launch sites CCSFS SLC-40, total 115 flights, KSC LC-39A, 57 flights, 
            VSFB SLC-4E, 36 flights. Because CCSFS SLC-40 used most for R&D development, this site 
            has high failure rate, the site that has highest successful rate was KSC 91.22% 
            (from 2010-2022).</p>

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
            
            <p>Most of ocean landing happened in CCSFS (5 flights) with the successful rate of 80%, 
            VSFB also had 2 flights landing on the ocean, KSC didn't have ocean landing but it has 
            highest successful rate of drone ship landing, and we only have one failure of landing 
            on ground in CCSFS site.</p>

            <div className="image-container">
                <img src={Falcon9Droneship} style={{width: "100%"}}
                    alt="SpaceX's drone ship landing - A Shortfall of Gravitas - Amy Thompson" />
                <p className="italic center">
                    SpaceX's drone ship landing "A Shortfall of Gravitas", 
                    after its first successful Falcon 9 rocket landing. 
                    (Image credit: Amy Thompson)
                </p>
            </div>

            <p>CCSFS SLC-40 is the site which had most launches, so it's reasonable that it included 
            various orbit launches that the other sites haven’t tried yet. However, the remainders 
            also had its special features, KSC had one sub-orbital and VSFB had one Heliocentric orbit 
            which CCSFS didn't have yet, other than that, when we look carefully, we can observe that 
            the large proportion of SSO and PO orbits were particularly from VSFB launch sites.</p>

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
            
            <p>When using folium library to visualize the location of launch sites, the map shows that 
            VAFB is located near the west coast of California, CCSFS is at a short distance from KSC which
            is just 5km away, their location is on the east coast of Florida. NASA Johnson Space Center is 
            between the two states located near Houston, Texas.</p>

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
                    The presentation of SpaceX's launch sites map by using Folium library
                </p>
            </div>

            <p>Launch site are in close proximity to coastline, which can help rocket fly over the ocean 
            during launch, crew also has option to abort launch and attempt water landing, and finally 
            minimize the risk from falling debris. Also launch site need to near the railway and highway 
            which allows easily transport for heavy cargo and property, but it is far from city to 
            restrict the danger of launching rockets to population dense areas.</p>

            <p>Another feature is easily noticeable that all launch sites are in proximity to equator. 
            This makes sense as it takes less fuel to get into space from the equator due to the physics 
            of Earth's rotation.</p>

            <h3 >2. The common customers of SpaceX</h3>

            <p>The statistics show that top SpaceX customers are NASA, SpaceX, SES and Iridium 
            communications. We have total 46 flights which are related to NASA, in which NASA(CRS) 
            accounted for the most 26 flights but fewer total payload 71326 kgs comparing to NASA(CTS) 
            6 flights but total payload is 77050 kgs. The average payload mass of each flights of NASA(CRS) 
            is 2743. Most of NASA flights was in CRS projects, it is a contract solution to deliver cargo 
            and supplies to the International Space Station (ISS).</p>
            
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

            <p>LEO orbit is the main trajectory that NASA frequently sends satellite into space with the 
            high successful rate of 70%. Others, Iridium, SES focuses on PO, and GTO orbit launchs with 
            the average payload mass is around 9600kg, 4600kg respectively.</p>

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

            <h3 >3. Which does the version of booster have the highest successful rate?</h3>

            <p>Falcon 9 has 5 booster version: v1.0, v1.1, FT, Block 4 and Block 5. Block 5 accounted for 
            most of the flights, it is also the most active rockets of SpaceX which already had 152 flights, 
            Block 5 can carried from 325kgs to 17400kgs with high average payload mass 10625kgs and high 
            successful rate up to 94%.</p>

            <p>On the other hand, v1.0 and v1.1 drew another story, the first version v1.0 didn't have 
            any successful flight, most of the second version v1.1 was crashed. The two rockets developed 
            afterwards in Falcon 9 family are F9 B4 and F9 FT is better for commercial launches, lifting 
            the successful rate to 50%, 75% respectively, but it still cannot compare with F9 Block 5.</p>

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

            <h3>4. Which type of booster landing has a high success rate?</h3>

            <p>Drone ship was the central landing method that SpaceX focus on (total 145 flights) with
            the success rate of 93.79%.</p>

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

            <h3>5. Finding the relationships between features with landing success rate.</h3>

            <p>When the flight number increase, there is a tendency for first stage to land successfully. 
            The figures give the evidence that almost the flights number which is after 100 were launched
            without failing. However, if there is a rise in the mass of payload, the first stage will be 
            less likely to safely landed. Visualization shows that payload mass below 16000 kgs is easier 
            to gain success.</p>

            <div className="image-container">
                <img src={Relationship1} style={{width: "100%"}}
                    alt="The relationship between flight number and payload mass" />
                <p className="italic center">
                    The relationship between flight number and payload mass
                </p>
            </div>

            <p>Different launch sites have different success rate. From the beginning, SpaceX primary 
            launch site was in CCSFS, then during the time of launching flight number 30 to 50, SpaceX 
            moved to VSFB and KSC launch site, there is only VSFB have 100% success rate at that time. 
            Since the flight number 130, SpaceX has equally divided the number of launches into three 
            locations.</p>

            <div className="image-container">
                <img src={Relationship2} style={{width: "100%"}}
                    alt="The relationship between flight number and launch sites" />
                <p className="italic center">
                    The relationship between flight number and launch sites
                </p>
            </div>

            <p>Next, we examine the ralationship between flight number and orbit. In VLEO, MEO, and LEO 
            orbit, the higher the number of flights, the more likely the first stage landed safely. On 
            the other hand, there seems to be no relationship between flight number with in GTO orbit.</p>

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

            <p>Based on the details data about launching features collected, cleaned, and explored in the 
            previous steps, we then utilize the well-designed sklearn library to predict the success rate 
            of the first stage landing. The process includes standardize data, and split it into train and 
            test set with the test size 20%. </p>
            
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

            <p>We use the hyperparameter tunning method to train data that mainly focus on 4 types of 
            models containing logistic regression, support vector machine, decision tree classifier, and 
            k-nearest neighbors classifier. The result was incredibly satisfying since the accurate rate 
            of prediction can be up to 92% which are shown in the picture below.</p>

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
            
            <p>Overfitting is the main reason to explain why decision tree has the highest score (94%)
            in train set, but lowest point in test set (69%). Therefore, support vector machine appears 
            to be the top model that has a stable score of 92% in both train and test set.</p>

            <p>Overall, the number of 92% won't stop here since SpaceX has constantly improved reusable 
            rocket with the aim of minimizing the cost of space access and providing even more affordable 
            flight for different customers.</p>

            <h2>Conclusion</h2>
            
            <p>It's been a lot fun reading a whole range of documents related to Falcon 9 rocket as well
            as applying accumulated knowledge after completing the course and eventually presenting it 
            here. There's so much about the vastness of space and so many awesome data scientists outside 
            there that I know this report still has shortcomings, so it would be so kind if I could receive 
            some suggestions to expand the ideas, fulfill the contents, and enhance the code.</p>

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
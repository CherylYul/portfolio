import React from "react"
import Menu from "../assets/Menu/Menu"
import Dropdown from "../assets/Menu/MenuDropdown"
import MenuItem from "../assets/Menu/MenuItem"
import Falcon9Price from "../assets/falcon9.png"
import Falcon9Structure from "../assets/falcon9-structure.svg"

export default function SpaceX() {
    return (
        <div className="content-container">
            <div className="proj-header">
                <h1 className="proj-title">SpaceX first landing prediction</h1>
                <div className="proj-sub">
                    <small>Mar 9 2023 • YulCheryl</small>
                    <a className="proj-github-link cfd9de-border"
                    href="https://github.com/CherylYul/spacex-first-stage-landing-prediction">
                        <i className="bi bi-github"></i>
                        View repository
                        <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                </div>
            </div>

            <div className="proj-summary quote">
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

            <Menu title="Table of contents">
                <Dropdown>
                    <MenuItem>Introduction</MenuItem>
                    <MenuItem>Methodology</MenuItem>
                    <MenuItem>Result</MenuItem>
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
                <img src={Falcon9Structure} style={{width: "60%"}}
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
            
            <p>The data are collected from <a href="https://github.com/r-spacex/SpaceX-API">SpaceX-API</a> 
            and <a href="https://en.wikipedia.org/wiki/List_of_Falcon_9_and_Falcon_Heavy_launches?utm_medium=Exinfluencer&utm_source=Exinfluencer&utm_content=000026UJ&utm_term=10006555&utm_id=NA-SkillsNetwork-Channel-SkillsNetworkCoursesIBMDS0321ENSkillsNetwork26802033-2022-01-01">
            List of Falcon 9 and Falcon Heavy on Wikipedia</a> by using BeautifulSoup and requests.</p>

            <h3>Collecting data from SpaceX API</h3>

            <p>After collecting, we convert data into dataframe and handle missing value, invalid data, 
            turn data types into right format. Next, we explore data by 3 methods. Firstly, utilize 
            sqlite3 library and using sql magic to do feature analysis and analyze the 2022 launches. 
            Secondly, using seaborn and matplotlib to understand the relationships between features, 
            for example flight number with payload mass, orbit with success rate to help us do feature 
            extraction for further prediction. We also do launch sites analysis by using folium to 
            visualize the location of each launch site on the map and calculate the distance from it.</p>

            <p>The 2 important features launch sites and payload mass also be showed on python plotly 
            dashboard to enable others explore and manipulate data in an interactive and real-time way.
            Finally, we use the sklearn library to standardize and split the data. The data is trained 
            with 4 types models: logistic regression, support vector machine, decision tree classifier 
            and k nearest neighbors classifier to find the model which has the highest accuracy.</p>

            <h2>Results</h2>

            <h4>Launch sites</h4>

            <p>SpaceX has 3 main launch sites CCSFS SLC-40, total 115 flights, KSC LC-39A, 57 flights, 
            VSFB SLC-4E, 36 flights. Because CCSFS SLC-40 used most for R&D development, this site 
            has high failure rate, the highest success rate was KSC 91.22% (from 2010-2022).</p>

            <p>Most ocean landing was in CCSFS (5 flights) success rate 80%, VSFB also has 2 flights, 
            KSC don’t have ocean landing but it has highest success rate of drone ship landing. Almost 
            ground pad landing was success, we only have 1 failure on CCSFS site.</p>

            <p>Because CCSFS SLC-40 is the site has most of launches, it is reasonable that it has 
            various orbit launches which the other sites haven’t tried yet. However, the left 2 sites 
            also have its special, KSC has 1 sub-orbital and VSFB has 1 Heliocentric orbit which CCSFS 
            doesn’t have. When we go deeper, we can observe that though VSFB has fewest launches, but 
            it also has its owns special orbit, almost SSO and PO orbit are from VSFB.</p>

            <p>From folium visualization, we can see that VAFB launch site is located on the west coast, 
            CCSFS and KSC are near together which are located on the east coast, NASA Johnson Space 
            Center are in the middle of 2 coast, located near Houston, Texas.</p>

            <p>All launch sites are in proximity to equator. This makes sense as it takes less fuel to 
            get into space from the equator due to the physics of Earth's rotation. The launch sites in 
            close proximity to the coast are also logical for safety reasons.</p>

            <p>Launch site are in close proximity to coastline, which can help rocket fly over the ocean 
            during launch, crew also has option to abort launch and attempt water landing, and finally 
            minimize the risk from falling debris. Also launch site need to near the railway and highway 
            which allows easily transport for heavy cargo and property, but it is far from city to 
            restrict the danger of launching rockets to population dense areas.</p>
    
            <h4>SpaceX customers</h4>

            <p>It can be seen that top SpaceX customers are NASA, SpaceX, SES and Iridium communications. 
            SES is a Luxembourgish leading satellite telecommunications network provider with over 70 
            satellites in two different orbits. Iridium operates the Iridium satellite constellation, a 
            system of 66 active satellites and nine in-orbit spares used for worldwide voice and data 
            communication from handheld satellite phones, satellite messenger communication devices and 
            integrated transceivers.</p> 
            
            <p>About NASA, the National Aeronautics and Space Administration is an independent agency 
            of the U.S. federal government responsible for the civil space program, aeronautics research, 
            and space research. Most of NASA flights was in CRS projects, it is a contract solution to 
            deliver cargo and supplies to the International Space Station (ISS).</p>

            <p>We have total 46 flights which are related to NASA, in which NASA(CRS) accounted for the 
            most 26 flights but fewer total payload 71326 kgs, compared to NASA(CTS) 6 flights but total 
            payload is 77050 kgs, average payload mass of each flights of NASA(CRS) is 2743, most of NASA 
            launch was LEO orbit with 70% success rate. It is reasonable because the ISS was in the low 
            earth orbit. Iridium focuses on PO orbit launch with average payload mass is about 9600 kgs, 
            SES focuses on GTO orbits with average payload mass is 4600kgs.</p>

            <h4 id="part_1_introduction">Booster version</h4>

            <p>Falcon 9 has 5 booster version: v1.0, v1.1, FT, Block 4 and Block 5. Block 5 accounted for 
            most of the flights, it is also the most active rockets of SpaceX (152 flights), Block 5 can 
            carried from 325kgs to 17400kgs with high average payload mass 10625kgs and high success rate 
            94%.</p>

            <p>On the other hand, v1.0 and v1.1 has high failure rate, the first version 100% failure and 
            second version was 80% failure. The latter 2 developed rockets in Falcon 9 family are F9 B4 
            and F9 FT is better for commercial launches, success rate is 50% and 75% respectively, but 
            still cannot compare with Block 5.</p>

            <h4>Booster landing</h4>

            <p>If booster landing from ocean, it means landing on specific ocean region, usually for 
            gathering test data purpose. Drone ship means land on a drone ship at sea. Ground pad, means 
            land on a ground pad near the launch site. The first success date of ground pad is 2015-12-22 
            (with B4, B5, FT), drone ship is 2016-04-08 (with B4, B5, FT), ocean is 2014-04-18 (with FT & 
            v1.1).</p>

            <h4>Orbit</h4>

            <p>SpaceX focuses on VLEO, GTO, ISS, LEO, PO, SSO, MEO. The highest success rate was VLEO 
                (94.8%), SSO (91.7%), LEO (81.25%). The lowest are GTO (55.9%).</p>

            <p>SpaceX also has flights from 1-2 with ES-L1, GEO, GEO, TLI and SO.</p>

            <h4>Relationships</h4>

            <p>When flight number increase, first stage tend to land successfully. Most of the flights 
            after 100 are success. However, if payload mass increase the less like the first stage 
            returns. Visualization shows that with payload mass over 8000 kgs, flight launches are 
            divided into 3 launch sites with high success rate, but in below 8000 kgs, flight failure 
            focus on CCSFS.</p>

            <p>In MEO and LEO orbit, the success appears related to number of flights, on the other hand, 
            there seems to be no relationship between flight number when in GTO and VLEO orbit. Heavy 
            payload has negative influence on GTO, positive on LEO and ISS, PO.</p>


            <h4>2022 launches</h4>

            <p>In 2022, SpaceX executed 60 launches, each month from 4-6 launches, all launches are 
            success, only 2 no attempt status on November for other reasons. Half of the launches was 
            in CCSFS, they also focuses on LEO, SSO, and GTO orbit.</p>

            <h4>Predictions</h4>

            <p>For 4 models, logistic regression, support vector machine, decision tree and k-nearest 
            neighbors, although decision tree has the highest score (94%), but it is overfitting leads 
            to low test score (69%). Therefore, support vector machine appear to be better model which 
            it has high score (92%) and the test score also high (92%).</p>

            <p>This is the capstone project I finished from IBM Data Science Professional Course. I think 
            it provided necessary skills and overall knowledge from visualizing data to building machine
            leaning models and pipelines.</p>
        </div>
    )
}
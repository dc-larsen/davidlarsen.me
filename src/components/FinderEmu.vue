<template>
<div class="finder">
    <div class="grid">
            <FinderItem name = "CLARK"/>
            <FinderItem name = "Security Injections"/>
            <FinderItem name = "Markdown Editor"/>
            <FinderItem name = "Job Jar"/>
            <FinderItem name = "Lol CLI"/>
            <FinderItem name = "Phishing Visualization"/>
            <FinderItem name = "WWYDH"/>
            <FinderItem name = "Photo Spot"/>
            <FinderItem name = "HeRO"/>
            <FinderItem name = "Morning Briefing"/>
    </div>
    <ProjectModal :data="projectDataMap"/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FinderItem from './FinderItem.vue'
import ProjectModal from './ProjectModal.vue'
import {ProjectData} from './ProjectData'

@Component({
  components: {
    FinderItem,
    ProjectModal,
  },
})
export default class FinderEmu extends Vue {
    private projectDataMap: Map<string, ProjectData> = new Map([
        [Projects.CLARK,{
            description:`Developer on team responsible for implementing a Cybersecurity curriculum management platform to curate and share learning objectives in academia. 
            Application uses new web technologies and the MEAN stack as part of a project funded by the National Science Foundation.`,
            image: "clark.png",
            githubUrl:"",
            exploreUrl:"https://clark.center"
        }],
        [Projects.SecurityInjections,{
            description:`Worked for the Computer and Information Sciences department in a small team as a lead developer responsible
                for developing a web application used as a instructional tool for introductory Computer Science students
                and other cyber-related majors.
                The current iteration is a single-page web application that makes use of the Angular JavaScript framework and
                template-based storage in order to dynamically generate instructional content from JSON.`,
            image: "threeo.jpg",
            githubUrl:"",
            exploreUrl:"http://cis1.towson.edu/~cyber4all/modules/nanomodules/Integer_Error-CS0_C++_Demo.html"
        }],
        [Projects.MarkdownEditor,{
            description:"WYSIWYG editor for markdown using a self-ported library (ng-tui-editor) for Angular 2+",
            image: "markdowner.png",
            githubUrl:"https://github.com/tylernhoward/ngx-tui-editor",
            exploreUrl:"http://www.tylernhoward.com/markdowner"
        }],
        [Projects.JobJar,{
            description:"Simple Alexa skill that randomly selects a household chore you have added to a list to help you stop procrastinating",
            image: "",
            githubUrl:"https://github.com/tylernhoward/alexa-job-jar",
            exploreUrl:""
        }],
        [Projects.LolCLI,{
            description:"Tiny command-line app hosted on NPM that outputs multiple categories of jokes retrieved from Reddit",
            image: "lol.png",
            githubUrl:"https://github.com/tylernhoward/lol-node-cli",
            exploreUrl:""
        }],
        [Projects.PhishingVisualization,{
            description:`Angular based application aimed at visualizing current online phishing threats across the world. Data is retrieved
                from PhishTank, and is presented in the form of geo-location data on a map, dynamic charts, and a filterable grid.
                Makes use of the PhishTank API, Google Maps API, and FreeGeoIP API.`,
            image: "phishVisual.jpg",
            githubUrl:"https://github.com/tylernhoward/phishing-threats",
            exploreUrl:"http://phishing-threats.herokuapp.com"
        }],
        [Projects.WWYDH,{
            description:`What Would You Do Here?: A semester project that involved continuing development on a web application for a nonprofit client. This application
                aimed to encourage community involvement in Baltimore City, MD by making use of vacant lots for user-suggested projects
                and events.
                This project manifested as a PHP based website that relied on a mySQL database and several APIs. Used the Agile development
                process to gather the client's requirements and input throughout the semester.`,
            image: "wwydh.jpg",
            githubUrl:"https://github.com/tylernhoward/wwydh",
            exploreUrl:"http://wwydh-2017.herokuapp.com"
        }],
        [Projects.PhotoSpot,{
            description:"Android application that utilizes location services to pull local pictures from the Flickr API.",
            image: "photospot-small.png",
            githubUrl:"https://github.com/tylernhoward/Photo-Spot.git",
            exploreUrl:""
        }],
        [Projects.HeRO,{
            description:`Worked in a small team through the Office and Technology Services at Towson University to create and deploy
                a desktop application written in Visual Basic.
                The application is a run-on-startup tool that provides help resources, videos, and relevant campus alerts to
                instructor workstations throughout multiple campuses of Towson University. To ensure reliability across different
                machines, the tool relies only on access to the web and a shared drive.`,
            image: "hero.jpg",
            githubUrl:"",
            exploreUrl:""
        }],
        [Projects.MorningBriefing,{
            description:`ASP.net application aimed at providing a dashboard for users with information regarding weather, news, and todos. Makes
                use of the OpenWeatherMap API and the News API. Also includes globalization, theming, and the Entity framework among
                other features.`,
            image: "mornbrief.jpg",
            githubUrl:"https://github.com/tylernhoward/morning-briefing",
            exploreUrl:""
        }],
    ]);
}
enum Projects {
        CLARK = "CLARK",
        SecurityInjections = "Security Injections",
        MarkdownEditor = "Markdown Editor",
        JobJar = "Job Jar",
        LolCLI = "Lol CLI",
        PhishingVisualization = "Phishing Visualization",
        WWYDH = "WWYDH",
        PhotoSpot="Photo Spot",
        HeRO="HeRO",
        MorningBriefing="Morning Briefing"
};

</script>

<style scoped>
    .finder{
        color: black;
        background-color: white;
        overflow:auto;
        height:inherit;
    }
    .grid{
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

</style>

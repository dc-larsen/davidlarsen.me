<template>
<div class="finder">
    <div class="grid">
            <FinderItem name = "Support Playbooks"/>
            <FinderItem name = "Customer Success Playbooks"/>
            <FinderItem name = "Zendesk Slackbot"/>
            <FinderItem name = "Coming Soon"/>
            <FinderItem name = "More Projects"/>
            <FinderItem name = "GitHub Portfolio"/>
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
        [Projects.SupportPlaybooks,{
            description:`Comprehensive collection of customer support playbooks covering escalation procedures, troubleshooting workflows, and team management strategies. 
            Designed to help support teams provide consistent, high-quality customer experiences while scaling efficiently.`,
            image: "support-playbooks.png",
            githubUrl:"https://github.com/dc-larsen/support-playbooks",
            exploreUrl:"https://github.com/dc-larsen/support-playbooks"
        }],
        [Projects.CustomerSuccessPlaybooks,{
            description:`Curated playbooks for customer success teams focused on onboarding, retention, expansion, and churn prevention strategies. 
                Includes templates for customer health scoring, success metrics tracking, and proactive outreach workflows.
                Built from experience scaling customer success operations at high-growth startups.`,
            image: "customer-success.png",
            githubUrl:"https://github.com/dc-larsen/customer-success-playbooks",
            exploreUrl:"https://github.com/dc-larsen/customer-success-playbooks"
        }],
        [Projects.ZendeskSlackbot,{
            description:"Slack bot integration for managers to streamline 1-on-1 preparation with their team members. Pulls Zendesk ticket data, performance metrics, and team insights to help managers have more effective, data-driven conversations with their reports.",
            image: "zendesk-slackbot.png",
            githubUrl:"https://github.com/dc-larsen/zendesk-slackbot",
            exploreUrl:"https://github.com/dc-larsen/zendesk-slackbot"
        }],
        [Projects.ComingSoon,{
            description:`Additional customer support and success projects in development. 
                Focus areas include automation tools, team performance dashboards, and workflow optimization solutions.`,
            image: "pro.png",
            githubUrl:"https://github.com/dc-larsen",
            exploreUrl:"https://github.com/dc-larsen"
        }],
        [Projects.MoreProjects,{
            description:`Exploring innovative solutions for support team efficiency, customer satisfaction measurement, and technical troubleshooting workflows. 
                Always building tools that make support teams more effective.`,
            image: "pro.png",
            githubUrl:"https://github.com/dc-larsen",
            exploreUrl:"https://github.com/dc-larsen"
        }],
        [Projects.GitHubPortfolio,{
            description:`View my complete GitHub portfolio for more projects related to customer support operations, team management tools, 
                and technical troubleshooting solutions built throughout my career in support leadership.`,
            image: "pro.png",
            githubUrl:"https://github.com/dc-larsen",
            exploreUrl:"https://github.com/dc-larsen"
        }],
    ]);
}
enum Projects {
        SupportPlaybooks = "Support Playbooks",
        CustomerSuccessPlaybooks = "Customer Success Playbooks",
        ZendeskSlackbot = "Zendesk Slackbot",
        ComingSoon = "Coming Soon",
        MoreProjects = "More Projects",
        GitHubPortfolio = "GitHub Portfolio"
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

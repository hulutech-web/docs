import { SidebarConfigArray } from "vuepress";

export function getEnSidebar(): SidebarConfigArray {
  return [
    {
      text: "Getting Started",
      // collapsible: true,
      children: [
        {
          text: "Installation",
          link: "/getting-started/installation",
        },
        {
          text: "Configuration",
          link: "/getting-started/configuration",
        },
        {
          text: "Directory Structure",
          link: "/getting-started/directory-structure",
        },
        {
          text: "Compile",
          link: "/getting-started/compile",
        },
      ],
    },
    {
      text: "Architecutre Concepts",
      // collapsible: true,
      children: [
        {
          text: "Request Lifecycle",
          link: "/architecutre-concepts/request-lifecycle",
        },
        {
          text: "Service Providers",
          link: "/architecutre-concepts/service-providers",
        },
        {
          text: "Facades",
          link: "/architecutre-concepts/facades",
        },
      ],
    },
    {
      text: "The Basics",
      // collapsible: true,
      children: [
        {
          text: "Routing",
          link: "/the-basics/routing",
        },
        {
          text: "HTTP Middleware",
          link: "/the-basics/middleware",
        },
        {
          text: "Controllers",
          link: "/the-basics/controllers",
        },
        {
          text: "Requests",
          link: "/the-basics/request",
        },
        {
          text: "Responses",
          link: "/the-basics/response",
        },
        {
          text: "Grpc",
          link: "/the-basics/grpc",
        },
        {
          text: "Logging",
          link: "/the-basics/logging",
        },
      ],
    },
    {
      text: "Digging Deeper",
      // collapsible: true,
      children: [
        {
          text: "Artisan Console",
          link: "/digging-deeper/artisan-console",
        },
        {
          text: "Cache",
          link: "/digging-deeper/cache",
        },
        {
          text: "Events",
          link: "/digging-deeper/event",
        },
        {
          text: "Mail",
          link: "/digging-deeper/mail",
        },
        {
          text: "Queues",
          link: "/digging-deeper/queues",
        },
        {
          text: "Task Scheduling",
          link: "/digging-deeper/task-scheduling",
        },
      ],
    },
    {
      text: "ORM",
      // collapsible: true,
      children: [
        {
          text: "Getting Started",
          link: "/orm/getting-started",
        },
        {
          text: "Migrations",
          link: "/orm/migrations",
        },
      ],
    },
  ];
}
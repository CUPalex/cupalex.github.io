// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-started-my-masters-in-language-science-and-technology-at-saarland-university",
          title: 'Started my Masters in Language Science and Technology at Saarland University.',
          description: "",
          section: "News",},{id: "news-started-a-job-as-a-research-assistant-at-lacoco-lab-with-dr-michael-hahn-very-excited-to-work-on-llm-interpretability-with-such-amazing-colleagues",
          title: 'Started a job as a Research Assistant at LaCoCo Lab with Dr. Michael...',
          description: "",
          section: "News",},{id: "news-attended-alps-2024-for-some-inspiration-and-breathtaking-views",
          title: 'Attended ALPS 2024 for some inspiration and breathtaking views :)',
          description: "",
          section: "News",},{id: "news-started-my-erasmus-semester-at-charles-university-in-prague-in-love-with-the-city",
          title: 'Started my Erasmus semester at Charles University in Prague. In love with the...',
          description: "",
          section: "News",},{id: "news-our-preprint-on-understanding-in-context-learning-in-gemma2-2b-is-on-arxiv-we-found-a-circuit-in-the-model-that-performs-in-context-learning-and-interpreted-the-information-flow-in-it-see-this-x-post-for-a-short-explanation",
          title: 'Our preprint on understanding in-context learning in Gemma2-2b is on arxiv! We found...',
          description: "",
          section: "News",},{id: "news-born-a-transformer-always-a-transformer-new-preprint-is-on-arxiv-we-try-to-bring-theory-closer-to-practice-and-answer-a-question-how-do-theoretical-limitations-of-transformers-manifest-in-pre-trained-models-see-yana-s-x-post-for-a-short-explanation",
          title: 'Born a Transformer – Always a Transformer?: new preprint is on arxiv! We...',
          description: "",
          section: "News",},{id: "news-our-work-on-understanding-in-context-learning-is-accepted-to-colm-2025",
          title: 'Our work on understanding in-context learning is accepted to COLM 2025!',
          description: "",
          section: "News",},{id: "news-attended-eeml-2025-got-a-best-poster-award-walking-around-sarajevo-getting-inspired-by-the-amazing-people-there-and-their-work-it-was-a-lot-of-fun",
          title: 'Attended EEML 2025, got a best poster award! Walking around Sarajevo, getting inspired...',
          description: "",
          section: "News",},{id: "news-excited-to-start-a-new-chapter-as-a-phd-student-at-rtg-neuroexplicit-models-of-language-vision-and-action-under-the-supervision-of-prof-michael-hahn",
          title: 'Excited to start a new chapter as a PhD student at RTG ``Neuroexplicit...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%62%61%6B%61%6C%6F%76@%6C%73%74.%75%6E%69-%73%61%61%72%6C%61%6E%64.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/CUPalex", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=8LlE4kUAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/abakalova13175", "_blank");
        },
      },];

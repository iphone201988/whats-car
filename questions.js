export const quizData = [
  {
    question: "Where would you rather be?",
    images: ["images/Option1.png", "images/Option2.png", "images/Option3.png"],
    answers: [
      { text: "Option 1", value: "Option1" },
      { text: "Option 2", value: "Option2" },
      { text: "Option 3", value: null },
    ],
  },

  {
    question: "What would you do in this scenario?",
  },

  {
    question: "When looking at this modern art piece which do you do first…",
    images: ["images/image4.png"],
    answers: [
      {
        text: "Examine the shapes, colors, brushstrokes and techniques used by the artist",
        value: "A",
      },
      {
        text: "Reflect on the emotions and messages conveyed, contemplating what the artist was trying to express beyond the canvas",
        value: "B",
      },
      {
        text: "Both A & B",
        value: null,
      },
      {
        text: "None of the above",
        value: null,
      },
    ],
  },

  {
    question: "Rank these words in most to least like you?",
  },
  {
    question: "Which better describes you…",
    images: ["images/image5.png"],
    answers: [
      { text: "I usually think before I speak.", value: "I" },
      { text: "I usually speak and think at the same time.", value: "E" },
    ],
  },
];

export const scenarios = [
  {
    question:
      "You are part of a group of friends planning a surprise party for a mutual friend. One of your friends feels excluded from the planning and has expressed hurt feelings. Do you address their concerns even though it might disrupt the planning, or do you push forward with the party to make sure it’s a success?",
    answers: [
      {
        text: "Acknowledge their feelings and find a way to include them in the planning without disrupting the overall plan.",
        value: "F",
      },
      {
        text: "Reassure them that their presence is valued but prioritize the party’s success by not changing the plans.",
        value: "T",
      },
      {
        text: "Invite them to join a smaller aspect of the planning process to make them feel involved while keeping the main plan intact.",
        value: "F",
      },
      {
        text: "Explain the situation logically and maintain the current plan, ensuring they understand why changes cannot be made.",
        value: "T",
      },
    ],
  },
  {
    question:
      "You are part of a volunteer group that supports a local cause, and you’re tasked with selecting one person to receive a major scholarship. There are two top candidates: one has a compelling personal story that pulls at your heartstrings, while the other has demonstrated exceptional merit and leadership. Who do you choose and why?",
    answers: [
      {
        text: "Choose the candidate with the compelling personal story because they need the scholarship the most to overcome their challenges.",
        value: "F",
      },
      {
        text: "Select the candidate with exceptional merit and leadership as they are more likely to maximize the scholarship’s impact.",
        value: "T",
      },
      {
        text: "Combine both perspectives and suggest splitting the scholarship to support both candidates, addressing needs and merits equally.",
        value: "F",
      },
      {
        text: "Establish a clear set of objective criteria and select the candidate who best meets them, regardless of personal stories.",
        value: "T",
      },
    ],
  },
  {
    question:
      "You’re at a wedding, and the bride’s dress rips just before the ceremony. She asks you if you think it’s noticeable, but you know it is. Telling her might ruin her confidence on her big day, but staying silent means she might feel embarrassed later. What do you do?",
    answers: [
      {
        text: "Gently tell her the truth and help find a quick solution, so she feels confident and comfortable.",
        value: "F",
      },
      {
        text: "Reassure her that she looks beautiful and minimize the issue unless it becomes absolutely necessary to mention.",
        value: "F",
      },
      {
        text: "Explain the situation objectively and suggest practical steps to fix the problem discreetly.",
        value: "T",
      },
      {
        text: "Focus on resolving the problem first and inform her only if necessary to avoid additional stress.",
        value: "T",
      },
    ],
  },
  {
    question:
      "You are the director of a school play, and there are 10 lead roles but 15 students who auditioned. Some of the students who didn’t perform well are the most excited about being in the play and have been working extra hard all season. How will you decide who gets the lead roles and who doesn't?",
    answers: [
      {
        text: "Assign roles based on merit but find creative ways to include everyone, even if in smaller roles, to reward their enthusiasm.",
        value: "F",
      },
      {
        text: "Allocate the lead roles strictly based on audition performance to maintain the quality of the play.",
        value: "T",
      },
      {
        text: "Consider rotating roles or adding more scenes to allow all the students to participate meaningfully.",
        value: "F",
      },
      {
        text: "Use a combination of performance and commitment criteria to select the best candidates for lead roles.",
        value: "T",
      },
    ],
  },
  {
    question:
      "You’re organizing a camping trip with a group of friends. One of your closest friends, who has been looking forward to this trip for months, recently broke their leg. While they still want to come, they may slow down the group. Do you invite them along or suggest they skip it this time?",
    answers: [
      {
        text: "Invite them but adjust the plans to accommodate their needs so they can still participate.",
        value: "F",
      },
      {
        text: "Suggest they skip this time but plan another, more accessible trip in the future so they don’t miss out.",
        value: "F",
      },
      {
        text: "Explain the potential issues clearly and prioritize the group’s overall experience by asking them to skip it this time.",
        value: "T",
      },
      {
        text: "Discuss the situation with the entire group to decide collectively whether to modify the plan or not.",
        value: "T",
      },
    ],
  },
  {
    question:
      "You are the coach of a youth soccer team. Two of the players are best friends, but one of them is significantly less skilled than the other. For the upcoming tournament, only one can play as the starting forward. How do you decide who gets the starting position?",
    answers: [
      {
        text: "Choose the more skilled player for the position but find another role for the less skilled friend so they both feel involved.",
        value: "F",
      },
      {
        text: "Select the more skilled player to maximize the team’s chances of winning.",
        value: "T",
      },
      {
        text: "Alternate the starting position between them during the tournament to give both a chance to play.",
        value: "F",
      },
      {
        text: "Base your decision on recent performance data to make an impartial choice.",
        value: "T",
      },
    ],
  },
  {
    question:
      "You are in charge of organizing a charity race. You know that a local business, which has supported the event for years, engages in questionable ethical practices. Their sponsorship is crucial for funding the event, but you’re uncomfortable aligning  with their values. Do you accept their money or decline it and risk the event's success?",
    answers: [
      {
        text: "Accept the money but advocate for transparency and use the event to promote ethical standards.",
        value: "F",
      },
      {
        text: "Decline the sponsorship and look for alternative funding sources to align with the event’s values.",
        value: "F",
      },
      {
        text: "Accept the sponsorship, ensuring it’s clear that the business’s practices do not reflect the event’s values.",
        value: "T",
      },
      {
        text: "Analyze the potential impact and choose the path that ensures the event’s success while minimizing ethical conflicts.",
        value: "T",
      },
    ],
  },
  {
    question:
      "You are leading a youth hiking trip. Midway through, one child becomes visibly tired and struggles to keep up, while the rest of the group is excited to push forward and reach the summit before sunset. Do you slow the group down to help the tired child or push ahead to ensure the majority has a rewarding experience?",
    answers: [
      {
        text: "Slow the group down and focus on ensuring everyone has a positive experience, even if it means not reaching the summit.",
        value: "F",
      },
      {
        text: "Arrange for a leader to stay with the tired child while the rest continue, so everyone has a chance to reach their goals.",
        value: "T",
      },
      {
        text: "Encourage the tired child to keep going, offering support and breaks, but keep the group together.",
        value: "F",
      },
      {
        text: "Push forward with the group but clearly communicate the reasons to the tired child and provide extra encouragement.",
        value: "T",
      },
    ],
  },
  {
    question:
      "You are in charge of selecting a student from your school to receive a special scholarship. There are two top candidates: one is academically brilliant but comes from a wealthy family, while the other has average grades but has overcome significant adversity. Who do you choose?",
    answers: [
      {
        text: "Choose the student who has overcome adversity, as the scholarship would make a significant difference in their life.",
        value: "F",
      },
      {
        text: "Select the academically brilliant student to reward their hard work and potential to excel further.",
        value: "T",
      },
      {
        text: "Find a way to provide recognition to both students, highlighting different strengths in each.",
        value: "F",
      },
      {
        text: "Use clear criteria for academic achievement and select the candidate who scores the highest based on those standards.",
        value: "T",
      },
    ],
  },
];

// The words for each category
export const words = {
  "E+T": [
    "Self-assured",
    "Determined",
    "Driving",
    "Focused",
    "Purposeful",
    "Robust",
    "Competitive",
    "Strategic",
    "Confident",
    "Challenging",
    "Demanding",
    "Firm",
    "Bold",
    "Direct",
    "Uncompromising",
    "Authoritative",
    "Resolute",
    "Independent",
    "Decisive",
    "Tough",
    "Forthright",
    "Courageous",
    "Daring",
    "Forceful",
  ],
  "E+F": [
    "Engaging",
    "Optimistic",
    "Popular",
    "Trusting",
    "Animated",
    "Enthusiastic",
    "Sociable",
    "Easy-going",
    "Talkative",
    "Eager",
    "Inspiring",
    "Lively",
    "Cheerful",
    "Imaginative",
    "Dynamic",
    "Fun",
    "Receptive",
    "Entertaining",
    "Influencing",
    "Convincing",
    "Communicative",
    "Creative",
    "Excited",
    "Stimulating",
  ],
  "I+F": [
    "Patient",
    "Caring",
    "Diplomatic",
    "Reliable",
    "Supportive",
    "Encouraging",
    "Considerate",
    "Understanding",
    "Compassionate",
    "Appreciative",
    "Steady",
    "Empathic",
    "Tactful",
    "Peacemaker",
    "Genuine",
    "Accommodating",
    "Quiet",
    "Reflective",
    "Sensitive",
    "Harmonious",
    "Loyal",
    "Cooperative",
    "Stable",
    "Kind",
  ],
  "I+T": [
    "Questioning",
    "Logical",
    "Detailed",
    "Deliberate",
    "Precise",
    "Analytical",
    "Exact",
    "Consistent",
    "Particular",
    "Reasoned",
    "Accurate",
    "Factual",
    "Meticulous",
    "Dependable",
    "Correct",
    "Objective",
    "Structured",
    "Prepared",
    "Practical",
    "Concise",
    "Organized",
    "Cautious",
    "Conventional",
    "Calculating",
  ],
};

export type Challenge = {
    id: string; // Unique identifier for the challenge
    name?: string; // The name of the challenge (e.g., "Pushups", "Sit-ups")
    required: number; // The required number to complete the challenge
    done: number; // The number completed so far
    system?: string; // The system used for certain challenges (e.g., "km" for Running). Optional since not all challenges will have it.
    description: string; // A brief description of the challenge
};

export type ChallengeList = Challenge[]

export const allChallenges: ChallengeList = [
    {
        id: "payloadx:pushups",
        name: "Pushups",
        required: 100,
        done: 0,
        description: "A classic upper body exercise that targets the chest, shoulders, and triceps. Complete 100 pushups to build upper body strength."
    },
    {
        id: "payloadx:situps",
        name: "Sit-ups",
        required: 100,
        done: 0,
        description: "An effective core exercise that targets the abdominal muscles. Complete 100 sit-ups for improved core strength."
    },
    {
        id: "payloadx:squats",
        name: "Squats",
        required: 100,
        done: 0,
        description: "A lower body exercise that strengthens the thighs, hips, and buttocks. Complete 100 squats to build leg and core strength."
    },
    {
        id: "payloadx:running",
        name: "Running",
        system: "km",
        required: 10,
        done: 0,
        description: "Go for a 10 km run to improve cardiovascular endurance and burn calories."
    },
    {
        id: "payloadx:lunges",
        name: "Lunges",
        required: 100,
        done: 0,
        description: "A lower body movement that targets the quads, glutes, and hamstrings. Complete 100 lunges for stronger legs and better balance."
    },
    {
        id: "payloadx:legraises",
        name: "Leg Raises",
        required: 100,
        done: 0,
        description: "A great exercise for strengthening the lower abs and hip flexors. Complete 100 leg raises for a toned core."
    },
    {
        id: "payloadx:russiantwists",
        name: "Russian Twists",
        required: 100,
        done: 0,
        description: "A rotational exercise that targets the obliques and helps improve overall core stability. Perform 100 Russian twists to sculpt your waist."
    },
    {
        id: "payloadx:crunches",
        name: "Crunches",
        required: 100,
        done: 0,
        description: "A simple but effective core exercise for strengthening the abdominal muscles. Do 100 crunches to enhance your midsection."
    },
    {
        id: "payloadx:abrollouts",
        name: "Ab Rollouts",
        required: 100,
        done: 0,
        description: "An advanced exercise that engages the entire core, especially the abs and lower back. Complete 100 ab rollouts for a stronger core."
    },
    {
        id: "payloadx:burpees",
        name: "Burpees",
        required: 50,
        done: 0,
        description: "A full-body exercise that combines squats, pushups, and jumps for a high-intensity workout. Perform 50 burpees to boost endurance and strength."
    },
    {
        id: "payloadx:planks",
        name: "Planks",
        system: "s",
        required: 30,
        done: 0,
        description: "Hold a static position that targets the entire core, back, and shoulders. Hold for 30 seconds to build core strength and stability."
    },
    {
        id: "payloadx:pullups",
        name: "Pull-ups",
        required: 30,
        done: 0,
        description: "A challenging upper body exercise that primarily targets the back and biceps. Complete 30 pull-ups for improved upper body strength."
    },
    {
        id: "payloadx:pushupvariations",
        name: "Push-up Variations",
        required: 50,
        done: 0,
        description: "Different push-up variations (e.g., wide, diamond, decline) help target different areas of the chest, shoulders, and triceps. Perform 50 push-up variations for variety in your workout."
    },
    {
        id: "payloadx:dips",
        name: "Dips",
        required: 50,
        done: 0,
        description: "An upper body exercise that primarily targets the triceps, shoulders, and chest. Complete 50 dips to strengthen your arms and chest."
    },
    {
        id: "payloadx:jumpingjacks",
        name: "Jumping Jacks",
        required: 200,
        done: 0,
        description: "A classic cardiovascular exercise that also helps improve coordination. Perform 200 jumping jacks for an effective warm-up or full-body workout."
    },
    {
        id: "payloadx:highknees",
        name: "High Knees",
        required: 200,
        done: 0,
        description: "A cardio exercise that involves running in place while lifting your knees as high as possible. Complete 200 high knees to improve cardiovascular endurance and lower body strength."
    },
    {
        id: "payloadx:mountainclimbers",
        name: "Mountain Climbers",
        required: 100,
        done: 0,
        description: "A full-body workout that focuses on core stability and cardiovascular endurance. Perform 100 mountain climbers to burn calories and strengthen your core."
    },
    {
        id: "payloadx:stepups",
        name: "Step-ups",
        required: 150,
        done: 0,
        description: "A lower body exercise that targets the glutes, quads, and hamstrings. Perform 150 step-ups to build leg strength and coordination."
    },
    {
        id: "payloadx:jumpinglunges",
        name: "Jumping Lunges",
        required: 50,
        done: 0,
        description: "A dynamic movement that strengthens the legs while improving balance and coordination. Perform 50 jumping lunges for a challenging lower body workout."
    }
]

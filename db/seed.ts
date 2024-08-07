import {db, Categories, Cards} from 'astro:db';
import {
    ASPIRATIONS_QUESTIONS, CAREER_AND_WORK_QUESTIONS,
    CELEBRATIONS_QUESTIONS,
    CONFLICT_AND_VALUES_QUESTIONS,
    CONNECTION_QUESTIONS,
    CURRENT_EVENTS_QUESTIONS,
    DAILY_LIFE_QUESTIONS,
    DAILY_SHARING_QUESTIONS,
    DYNAMICS_QUESTIONS,
    EMOTIONS_AND_EXPRESSION_QUESTIONS,
    FAMILY_QUESTIONS,
    FINANCES_QUESTIONS,
    FRIENDSHIPS_QUESTIONS,
    HANDLING_LOSS_AND_GRIEF_QUESTIONS, HEALTH_AND_WELLNESS_QUESTIONS,
    INTERESTS_AND_EXPLORATION_QUESTIONS,
    INTIMACY_QUESTIONS,
    LEGACY_AND_IMPACT_QUESTIONS,
    MILESTONES_QUESTIONS,
    PARENTING_QUESTIONS,
    PAST_QUESTIONS, PERSONAL_GROWTH_AND_LEARNING_QUESTIONS,
    PREFERENCES_QUESTIONS,
    SELF_DISCOVERY_QUESTIONS, UNSORTED_QUESTIONS
} from "./prompts.ts";

export default async function () {
    await db.insert(Categories).values([
        {
            "id": 1,
            "name": "Intimacy",
            "description": "Exploring physical closeness and romantic gestures.",
            "color": "#D32F2F",
            "icon": "mdi:heart"
        },
        {
            "id": 2,
            "name": "Connection",
            "description": "Building emotional bonds and understanding each other.",
            "color": "#00796B",
            "icon": "mdi:heart"
        },
        {
            "id": 3,
            "name": "Past",
            "description": "Reflecting on personal history and shared memories.",
            "color": "#C71585",
            "icon": "mdi:history"
        },
        {
            "id": 4,
            "name": "Self-Discovery",
            "description": "Understanding individual growth and aspirations.",
            "color": "#039BE5",
            "icon": "mdi:lightbulb"
        },
        {
            "id": 5,
            "name": "Daily Life",
            "description": "Discussing everyday experiences and routines.",
            "color": "#FF5722",
            "icon": "mdi:calendar-day"
        },
        {
            "id": 6,
            "name": "Aspirations",
            "description": "Planning and dreaming about what's ahead.",
            "color": "#303F9F",
            "icon": "mdi:rocket"
        },
        {
            "id": 7,
            "name": "Preferences",
            "description": "Sharing likes, dislikes, and pet peeves.",
            "color": "#689F38",
            "icon": "mdi:thumb-up"
        },
        {
            "id": 8,
            "name": "Dynamics",
            "description": "Exploring how the relationship functions and evolves.",
            "color": "#6A0D91",
            "icon": "mdi:local-area-network"
        },
        {
            "id": 9,
            "name": "Emotions and Expression",
            "description": "Exploring and expressing feelings, gratitude, and appreciation.",
            "color": "#D32F2F",
            "icon": "mdi:emoticon-happy"
        },
        {
            "id": 10,
            "name": "Conflict and Values",
            "description": "Addressing conflicts and discussing core values and beliefs.",
            "color": "#00796B",
            "icon": "mdi:shield-check"
        },
        {
            "id": 11,
            "name": "Daily Sharing",
            "description": "Engaging in interactive activities and sharing everyday photos.",
            "color": "#C71585",
            "icon": "mdi:camera"
        },
        {
            "id": 12,
            "name": "Interests and Exploration",
            "description": "Discussing personal interests, hobbies, and future explorations.",
            "color": "#039BE5",
            "icon": "mdi:compass"
        },
        {
            "id": 13,
            "name": "Finances",
            "description": "Exploring financial goals and money management.",
            "color": "#FF5722",
            "icon": "mdi:currency-usd"
        },
        {
            "id": 14,
            "name": "Family",
            "description": "Discussing family dynamics and relationships.",
            "color": "#303F9F",
            "icon": "mdi:home-group"
        },
        {
            "id": 15,
            "name": "Parenting",
            "description": "Exploring parenting philosophies and strategies.",
            "color": "#689F38",
            "icon": "mdi:baby"
        },
        {
            "id": 16,
            "name": "Handling Loss and Grief",
            "description": "Navigating difficult situations and personal loss.",
            "color": "#6A0D91",
            "icon": "mdi:heart-broken"
        },
        {
            "id": 17,
            "name": "Milestones",
            "description": "Reflecting on important life events and achievements.",
            "color": "#D32F2F",
            "icon": "mdi:trophy"
        },
        {
            "id": 18,
            "name": "Celebrations",
            "description": "Planning and enjoying special occasions together.",
            "color": "#00796B",
            "icon": "mdi:party-popper"
        },
        {
            "id": 19,
            "name": "Legacy and Impact",
            "description": "Considering the impact on the world and relationships.",
            "color": "#C71585",
            "icon": "mdi:handshake"
        },
        {
            "id": 20,
            "name": "Current Events",
            "description": "Discussing recent news and its impact on perspectives.",
            "color": "#039BE5",
            "icon": "mdi:newspaper"
        },
        {
            "id": 21,
            "name": "Friendships",
            "description": "Discussing relationships outside the partnership.",
            "color": "#FF5722",
            "icon": "mdi:account-multiple"
        },
        {
            "id": 22,
            "name": "Personal Growth and Learning",
            "description": "Encouraging development and new skills.",
            "color": "#303F9F",
            "icon": "mdi:school"
        },
        {
            "id": 23,
            "name": "Health and Wellness",
            "description": "Sharing thoughts on physical and mental health.",
            "color": "#689F38",
            "icon": "mdi:heart-pulse"
        },
        {
            "id": 24,
            "name": "Career and Work",
            "description": "Discussing long-term career goals and current job specifics.",
            "color": "#6A0D91",
            "icon": "mdi:briefcase"
        }
    ]);

    await db.insert(Cards).values([
        ...INTIMACY_QUESTIONS,
        ...CONNECTION_QUESTIONS,
        ...PAST_QUESTIONS,
        ...SELF_DISCOVERY_QUESTIONS,
        ...DAILY_LIFE_QUESTIONS,
        ...ASPIRATIONS_QUESTIONS,
        ...PREFERENCES_QUESTIONS,
        ...DYNAMICS_QUESTIONS,
        ...EMOTIONS_AND_EXPRESSION_QUESTIONS,
        ...CONFLICT_AND_VALUES_QUESTIONS,
        ...DAILY_SHARING_QUESTIONS,
        ...INTERESTS_AND_EXPLORATION_QUESTIONS,
        ...FINANCES_QUESTIONS,
        ...FAMILY_QUESTIONS,
        ...PARENTING_QUESTIONS,
        ...HANDLING_LOSS_AND_GRIEF_QUESTIONS,
        ...MILESTONES_QUESTIONS,
        ...CELEBRATIONS_QUESTIONS,
        ...LEGACY_AND_IMPACT_QUESTIONS,
        ...CURRENT_EVENTS_QUESTIONS,
        ...FRIENDSHIPS_QUESTIONS,
        ...PERSONAL_GROWTH_AND_LEARNING_QUESTIONS,
        ...HEALTH_AND_WELLNESS_QUESTIONS,
        ...CAREER_AND_WORK_QUESTIONS,
        ...UNSORTED_QUESTIONS,
    ])
}
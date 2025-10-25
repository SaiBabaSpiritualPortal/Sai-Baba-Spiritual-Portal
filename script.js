// =======================
// 🌸 Highlight Share Your Experience Popup
// =======================
window.addEventListener("load", () => {
  const popup = document.getElementById("highlightPopup");
  if (popup) {
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 7000); // auto-close
  }
});

function closeHighlightPopup() {
  const popup = document.getElementById("highlightPopup");
  if (popup) popup.classList.remove("show");
}

// =======================
// 🌸 Sai Baba Messages
// =======================


const dailyQuotes = [
    "Baba says: 'Why fear when I am here? I will guide and guard you always, My child.'",
    "Baba says: 'Hold fast to Shraddha (Faith) and Saburi (Patience). These two alone will carry you across the ocean of life.'",
    "Baba says: 'Look to Me, and I will look to you. Your devotion is a debt I am always eager to repay.'",
    "Baba says: 'My tomb will speak and move to the needs of My devotees. Know that I am ever active, even from there.'",
    "Baba says: 'I am not confined to this body, My child. I am everywhere, in every creature, and beyond what you can see.'",
    "Baba says: 'Always remember this, My child: Whatever you do, wherever you may be, I am always aware of everything you do.'",
    "Baba says: 'If you make Me the sole object of your thoughts and aims, I promise you shall gain the Supreme Goal.'",
    "Baba says: 'God has agents everywhere and their powers are vast. Learn to respect the divine in all people.'",
    "Baba says: 'Do not fight with anyone. If someone speaks ill of you, pass on like water, unperturbed.'",
    "Baba says: 'If you spread your palms with devotion before Me, I am immediately with you, day and night.'",
    "Baba says: 'The Lord is the sole Actor. What I do, I do as His obedient servant and witness; I take no credit.'",
    "Baba says: 'Be content and cheerful with whatever comes. Why worry? Trust only in God's provision.'",
    "Baba says: 'Poverty is the highest of riches, My child, and a thousand times superior to a king's fading wealth.'",
    "Baba says: 'Spend money in charity and be generous, but never be extravagant.'",
    "Baba says: 'Do not criticize or carp at others. To do so is to pierce Me to the quick and injure Me.'",
    "Baba says: 'All that you see—the movable and the immovable—is My Body. Treat all creation with love and respect.'",
    "Baba says: 'This human body is a great opportunity; it will not return. Use it to fix your mind upon the God that lives in all.'",
    "Baba says: 'The giving of Dakshina helps you let go of attachment, and by detachment, you gain true devotion.'",
    "Baba says: 'You must fulfill any promise you have made. Always stand by truth and let your word be firm.'",
    "Baba says: 'If you cannot bear the abuse of another, say a soft word, or else, simply leave the place.'",
    "Baba says: 'The best way to receive is to give. The act of giving is truly a seed sown for a rich harvest in your future.'",
    "Baba says: 'I will take you to the very end. Surrender completely to God, and I will do the rest.'",
    "Baba says: 'Love as thought is Truth. Love as action is Right Conduct. Love as feeling is the only Non-Violence.'",
    "Baba says: 'Our Karma is the cause of all joy and sorrow. What comes to you today, you must patiently accept.'",
    "Baba says: 'The mother tortoise feeds her young ones with a mere glance. My gaze upon you is the same—it gives you all the sustenance you need.'",
    "Baba says: 'Nobody comes to Me unless there is some tie. Every soul who comes here is pulled by a thread of connection.'",
    "Baba says: 'Be like the lotus, My child. It unfolds its petals in the sky, unaffected by the muddy water that supports it.'",
    "Baba says: 'The only way to be happy is to stop searching for faults in others. Look only for your own and correct them.'",
    "Baba says: 'If a devotee is about to fall, I stretch out My hands to support him. I will not allow My devotees to come to harm.'",
    "Baba says: 'If one devotes their entire mind to Me and rests completely in Me, they need fear nothing for the body or the soul.'",
    "Baba says: 'Where there is deep love for the Guru, there is no lack. There shall be no want in the house of that true devotee.'",
    "Baba says: 'God lives in all beings. He is the great wire-puller of this world, and all obey His silent command.'",
    "Baba says: 'If you are wealthy, be humble. Look at the plants—they only bend when they are bearing fruit.'",
    "Baba says: 'What do we lose by another's good fortune? Celebrate with them, My child, or strive to emulate them. That should be your desire.'",
    "Baba says: 'Avoid all rivalry and bickering. If you live in harmony, God Himself will surely protect you.'",
    "Baba says: 'The greatest pilgrimage is to your own heart. Meditate on Me there, either with form or without form; that is pure bliss.'",
    "Baba says: 'He who leaves the attachment for his worldly kin and loves Me alone, he is My real lover, and he merges in Me.'",
    "Baba says: 'My business is only to give blessings. Will a mother ever get angry with her children? I get angry with none.'",
    "Baba says: 'Do not say of anyone that he is your enemy. All are one and the same in the eyes of the Divine.'",
    "Baba says: 'Whenever anyone steps into this Dwarkamai, his goal is achieved and his objects are fulfilled.'",
    "Baba says: 'If one repeats My name, their Karma is destroyed. I stay by his side always.'",
    "Baba says: 'Serve the hungry creature who comes to you, My child. God is pleased if you feed the hungry; regard this as absolute truth.'",
    "Baba says: 'Do not kick against the pricks of life. Accept the hardships that come, for they are My strange blessings and grace.'",
    "Baba says: 'Your mind must be pure before true knowledge can dawn. Discharge your duties honestly and without attachment.'",
    "Baba says: 'The most blessed food is that which is shared. It is by feeding others that you feed Me.'",
    "Baba says: 'Sabka Malik Ek! (The Lord of all is One). Remember, My child, Mosque and temple are the very same.'",
    "Baba says: 'Death is but an illusion. The body is a worn-out garment cast aside, but the soul does not truly die.'",
    "Baba says: 'Be cheerful and content with what comes, for the wise one knows the ultimate plan. There is no mistake in God's timing.'",
    "Baba says: 'I will not allow My devotees to come to harm. This is my word.'",
    "Baba says: 'I will be with you, My child, whenever and wherever you think of Me. Do not let fear enter your heart.'",
    "Baba says: 'My eye is ever fixed upon those who love Me. I watch them day and night.'",
    "Baba says: 'Know this for yourself: My spirit is immortal. There is no end to My presence or power.'",
    "Baba says: 'If you cannot grant a beggars request, decline it politely. Do not get angry at them.'",
    "Baba says: 'The whole purpose of the Divine coming down (Avatar) is to make you realize the God that is within your own heart.'",
    "Baba says: 'If you sing earnestly about My life and My deeds, I shall certainly surround you on all sides with My grace.'",
    "Baba says: 'The simple utterance of the name Sai will cleanse all sins that come from loose talk and gossip.'",
    "Baba says: 'You should never take the labor of others without paying them their due. This is not proper behavior.'",
    "Baba says: 'I shall be ever active and vigorous, even after leaving this earthly body and entering the tomb.'",
    "Baba says: 'When anyone enters this Dwarkamai, all his sorrows and sufferings come to a swift end.'",
    "Baba says: 'Whatever creature is hungry and comes to you at mealtime is an Atithi (guest). You must feed them.'",
    "Baba says: 'I am a slave to those pure souls who hunger and thirst only after Me and treat all else as unimportant.'",
    "Baba says: 'Know that you are the result of your past actions. Be very careful about every action you perform today.'",
    "Baba says: 'Be patient, not rash. Remember: haste makes waste, and waste will only bring you worry.'",
    "Baba says: 'If you make Me the sole refuge, I am your debtor, and I will give My head to save you.'",
    "Baba says: 'The Divine is present in everyone. You must show respect and reverence to one another.'",
    "Baba says: 'Humility is not for all situations; severity is sometimes necessary when dealing with those who seek to cause harm.'",
    "Baba says: 'You must know the Master (God). Else, why have you come here? To collect cow dung cakes?'",
    "Baba says: 'I will be with you, My child, whenever and wherever you think of Me. Fear not, I am truly there.'",
    "Baba says: 'The greatest spiritual practice is Love. Let the flame of your love be steady and strong, never flickering.'",
    "Baba says: 'Many nations, but the Earth is one. Many beings, but the Breath is one. Many religions, but God is one.'",
    "Baba says: 'What you give, you will surely get. Recognize the existence of this eternal Moral Law.'",
    "Baba says: 'If you cannot grant a request, be polite and gentle. Do not mock or ridicule the one asking for help.'",
    "Baba says: 'I am in everything and beyond, My child. I fill all space. Truly, all that you see is My form.'",
    "Baba says: 'The reward for a good deed is great, My child; the reward for evil is very little. Strive for goodness always.'",
    "Baba says: 'If you avoid all rivalry and bickering, then I will gladly protect you in all situations.'",
    "Baba says: 'You must pass your days in song. Let your whole life be an unbroken song of the Divine.'",
    "Baba says: 'Do not be misled by this world. It is a playground of illusion, full of false paths and fleeting values.'",
    "Baba says: 'God is always for those who are not for themselves. Selflessness is the supreme quality.'",
    "Baba says: 'To God be all the praise. I am but His slave, and without His permission, nothing can be done by Me.'",
    "Baba says: 'Hold on to faith and patience. By this, I promise you, I will be with you wherever you are.'",
    "Baba says: 'The wise are those who are cheerful and content with whatever has been allotted to them in this life.'",
    "Baba says: 'I will pull out My devotees from the very jaws of death, My child. Have no doubt.'",
    "Baba says: 'If a person remembers My name with love, I shall fulfill their every wish and cause their devotion to grow.'",
    "Baba says: 'If you cannot endure the abuse, either speak a simple word or else leave the place entirely.'",
    "Baba says: 'What God gives is a blessing that is never exhausted. What man gives never truly lasts.'",
    "Baba says: 'Be cheerful and contented with what comes to you, for it is all part of the Divine plan.'",
    "Baba says: 'If you listen to My stories (Leelas) and fix your gaze on Me alone, you will easily reach God.'",
    "Baba says: 'The greatest spiritual practice is simply to avoid causing any kind of annoyance to others.'",
    "Baba says: 'One must always cling to the truth and keep every promise that has been made.'",
    "Baba says: 'I am the Inner Ruler of everyone, and I am seated in your heart. Always know this.'",
    "Baba says: 'If you seek My advice or My help, it shall be given to you at once. Do not delay.'",
    "Baba says: 'The donor sows his seed so that he may reap a rich spiritual harvest in the future.'",
    "Baba says: 'My eye is ever watchful over those who love Me and call upon Me.'",
    "Baba says: 'Work is worship. Even the smallest act of duty is a flower placed at the Feet of God.'",
    "Baba says: 'I am in everything and beyond. I fill all space.'",
    "Baba says: 'I will not allow any harm to come to My devotees. This is my absolute vow.'",
    "Baba says: 'The body is cast away like worn-out garments. The soul does not truly die; it is eternal.'",
    "Baba says: 'He who carps and cavils at others pierces Me in the heart. Speak only of good things.'",
    "Baba says: 'If you cannot grant a request, be polite. Do not let anger or frustration show in your words.'",
    "Baba says: 'Every experience is a lesson, My child. Every loss you suffer is truly a gain in wisdom.'",
    "Baba says: 'I shall guide and guard you. March on bravely, My child, and have no fear.'",
    "Baba says: 'Avoid all unnecessary disputes. Arguing is only a waste of your precious spiritual energy.'",
    "Baba says: 'The heart that is filled with compassion is the most genuine temple of God.'",
    "Baba says: 'Your sorrow and happiness are caused by your own Karma. Therefore, put up with whatever comes to you.'",
    "Baba says: 'I am ever living to help and guide all who come to Me, surrender to Me, and seek My refuge.'",
    "Baba says: 'God has no preferences. His action is only a reflection and resound of your own actions.'",
    "Baba says: 'He who suffers patiently and endures silently pleases Me the most in this world.'",
    "Baba says: 'To attain true happiness, My child, get on with your worldly activities cheerfully, but never forget God.'",
    "Baba says: 'Whosoever sets their foot on the soil of Shirdi, know that their long sufferings will soon come to an end.'",
    "Baba says: 'The name of Allah is eternal, My child. Know that Allah is truly all-in-all.'",
    "Baba says: 'Be patient, not in a hurry. For I tell you, haste makes waste, and waste will bring you worry.'",
    "Baba says: 'The giver is sowing a seed to reap a rich spiritual harvest in the time to come.'",
    "Baba says: 'I will not allow My devotees to come to harm. This is my absolute vow, and it is unbreakable.'",
    "Baba says: 'The greatest pilgrimage you can ever take is the one to your own purified heart.'",
    "Baba says: 'Know that spiritual poverty is the highest of all riches, far superior to any kingdom.'",
    "Baba says: 'The fruit of a good deed is truly great, My child; the fruit of evil is very little. Strive for goodness.'",
    "Baba says: 'If you make Me the sole object of your thoughts, all other distracting desires will drop away.'",
    "Baba says: 'Love one another and help others to rise. Love is infectious, and it is the greatest healing energy.'",
    "Baba says: 'The only true spiritual practice I know is for you to fix your loving gaze upon Me.'",
    "Baba says: 'My eye is ever fixed upon those who love Me, and I watch them day and night.'",
    "Baba says: 'I will pull out My sincere devotees from the very jaws of death, so have no fear.'",
    "Baba says: 'If you make Me your sole refuge, I become your debtor, and I will give My head to save you.'",
    "Baba says: 'The miserable soul will rise to joy the moment they step onto the sacred steps of the Dwarkamai.'",
    "Baba says: 'The only way to find happiness is to stop looking for faults in others.'",
    "Baba says: 'The difficulties you face are not punishments. They are experiences for spiritual cleansing.'",
    "Baba says: 'My tomb shall bless and speak to every single need of My devoted children.'",
    "Baba says: 'Trust in Me, My child, and your prayer shall be answered. My word is truth.'",
    "Baba says: 'Though I be no more in flesh and blood, I shall ever protect My devotees.'",
    "Baba says: 'Show Me him who has sought My refuge and yet has been turned away. I have never failed one.'",
    "Baba says: 'My promise is not in vain: I shall ever lighten your burden. Cast all your cares upon Me.'",
    "Baba says: 'Knock, and the door shall open; ask, and it shall be granted. Seek Me with your whole heart.'",
    "Baba says: 'There shall be no want in the house of My sincere devotee. I will provide.'",
    "Baba says: 'Remember My greatest message: Sabka Malik Ek. There is One God who governs all.'",
    "Baba says: 'Why fear when I am here? Trust in Me always.'"
];

const actions = [
  "Offer water to a thirsty person today.",
  "Speak kindly to someone who is sad.",
  "Feed a stray animal with love.",
  "Practice fearlessness today. When worry arises, mentally repeat: 'Why fear when I am here?'",
  "Choose one goal that requires patience (Saburi). Do one small step toward it without rushing or complaining.",
  "Spend five minutes in quiet contemplation, turning your inner gaze (Look to Me) toward the Divine within your heart.",
  "Focus on one of Sai Baba's key teachings today. Act as if His presence is right beside you, guiding your every move.",
  "Greet ten different people (or animals) with genuine love and respect, seeing the Divine Spirit (His Body) in each one.",
  "Before starting a task, pause and affirm: 'Baba knows what I am doing.' Let this knowledge inspire your best effort.",
  "Choose one minor attachment (a distraction, a craving) and fast from it for the next 24 hours.",
  "Recognize and genuinely thank an 'agent' of God today—someone who has helped you, guided you, or given you comfort.",
  "Today, if you hear or read something negative, practice passing on unperturbed. Do not comment, share, or react.",
  "Begin and end your day by spreading your palms and speaking to Baba from your heart, just as a child speaks to a parent.",
  "When you complete a task successfully, quietly say: 'The Lord is the sole Actor,' and offer the success to Him.",
  "Practice contentment with the meal, the weather, or the immediate situation you are given.",
  "Choose one thing you genuinely own but do not need. Give it away with a cheerful heart.",
  "Donate a small amount or give food to a person in need. Be generous, but not extravagant.",
  "Commit to a judgment-free day. Avoid any internal or external criticism of others.",
  "Take time today to appreciate nature. Treat all creation (plants, water, air) with deep respect.",
  "Use this precious human body today to perform an act of kindness you would normally avoid.",
  "Practice detachment by offering a service or a gift (Dakshina) without expecting any credit or 'return' for it.",
  "Fulfill an old promise you might have been putting off, no matter how small. Let your word be firm.",
  "If a conflict arises, simply say a soft word or leave the place immediately. Do not engage.",
  "Give an unexpected gift (of time, money, or appreciation) to someone who doesn't expect it.",
  "Surrender a major worry completely to God. Visualize yourself placing the burden into Baba’s hands.",
  "Look for an opportunity to express love as action (Right Conduct) by helping someone without being asked.",
  "Accept today's hardship (a queue, a delay, a difficult person) as a consequence of past Karma and handle it calmly.",
  "Be sustained by His grace. Skip a snack or a small indulgence, and trust in His provision for your energy.",
  "Reach out to someone you haven't spoken to in a while. Honor the tie that pulled you together.",
  "Choose to be unaffected by the 'muddy water' of a negative situation at work or home today.",
  "Look only for your own fault in a recent conflict. Use that knowledge to correct your own behavior first.",
  "When you feel overwhelmed or 'about to fall,' close your eyes and ask Baba to stretch out His hands to support you.",
  "Before sleeping, dedicate your entire mind to Baba for one minute, resting completely in His protection.",
  "When you feel a sense of 'lack,' remind yourself that 'where there is deep love for the Guru, there is no lack.'",
  "Step back and observe an event today. See it not as your doing, but as the action of God, the sole wire-puller.",
  "If you receive praise or feel successful, practice humility by offering that success to the Lord.",
  "Celebrate another's success today. Congratulate them genuinely and feel happiness for their good fortune.",
  "Go out of your way to create harmony between two people or groups. Avoid bickering and rivalry.",
  "If faced with verbal attack, do not fight back. Instead, choose to leave or say a soft, neutral word.",
  "Today, choose to make your own purified heart your greatest pilgrimage site. Sit in silence for five minutes.",
  "If facing a decision, sincerely seek Baba’s help through prayer or by opening the Satcharitra for guidance.",
  "Dedicate one hour of your day (not physically, but emotionally) to loving the Divine more than any worldly kin.",
  "Look for an opportunity to give a blessing (a compliment, a moment of peace) without getting angry at anyone.",
  "Mentally forgive someone you feel has wronged you. Do not hold anyone as your enemy.",
  "Treat your home or workspace as the Dwarkamai. Intend that every person who enters will feel joy.",
  "Listen to a story or read a chapter from a holy book (like the Satcharitra) today to vanish pride and ego.",
  "Spend ten minutes repeating a Divine name (e.g., 'Sai Ram'). Trust this destroys your negative Karma.",
  "Feed a hungry creature today (a person, bird, or animal). Regard this as serving God directly.",
  "Accept a hardship that comes today (a headache, a lost item) as a strange grace and endure it without complaint.",
  "Be self-aware today: if a teacher or guide offers wisdom, don't let egoism block you from receiving it.",
  "Perform your duties honestly and without attachment to the result, working only for the purification of your mind.",
  "If you encounter a beggar, remember: if you cannot give, simply offer a gentle 'no.'",
  "Trust in the pass Baba gives you. Stop worrying about the 'halt' or delay in your journey.",
  "Share your meal with at least one other person today, making it a blessed act.",
  "Practice oneness (Sabka Malik Ek) by offering a sincere greeting to someone of a different faith or background.",
  "Focus on your eternal soul today, not your temporary body. Practice a healthy detachment from physical aches.",
  "When something goes 'wrong,' affirm that it's part of the ultimate plan and remain cheerful.",
  "Avoid being aggressive. Instead, choose to put up with a complaint or criticism silently and patiently.",
  "Act with total integrity today, remembering that Baba gives an account to God for your conduct.",
  "When pain comes, tell yourself it is a reflection of past actions, and accept it quietly to clear the debt.",
  "If you feel doubt, choose to have full faith in the Guru’s guidance, regardless of outward appearances.",
  "Dedicate all your desires to the Divine. Hunger only after Him, treating all else as secondary.",
  "When tempted to act on impulse, remind yourself: 'I am not independent.' Align your action with God’s will.",
  "Today, remember His name with love often. Let this love be the fuel for all your actions.",
  "When you catch yourself in idle talk or gossip, stop and mentally chant 'Sai, Sai' to cleanse the sin.",
  "See an instance of joy and sorrow that comes your way, but allow neither to truly touch your inner peace.",
  "Give up one trivial desire that arises (e.g., that extra dessert, one TV show) and fix your mind on God instead.",
  "Go out of your way to promote harmony. Make peace, not war, in any small situation you encounter.",
  "Whenever you feel lonely, simply repeat His name to feel His immediate presence by your side.",
  "Today, mentally ask for what you want—not for objects, but for deeper faith and patience.",
  "Read a teaching of Baba from his time after Samadhi. Trust that His bones speak to your welfare.",
  "If you see someone in need, if you cannot help them, at least be polite and never mock or ridicule.",
  "When you are praised, remember that all credit goes to the Divine. Say: 'To God be the praise.'",
  "Write the name 'Sai' ten times with deep reverence, washing away all past idle speech.",
  "Use a portion of your wealth today for Dharma (righteous purpose), not just personal enjoyment.",
  "Practice compassion. If someone criticizes another, quickly steer the conversation to a good topic.",
  "Pass on unperturbed if others speak ill of you. Do not let their harsh words pierce your peace.",
  "Choose a challenging activity, and before you start, affirm that Baba knows everything you do.",
  "When you are waiting for a result, actively practice trust and patience for the duration of the wait.",
  "Commit to being absolutely truthful today, even in small, uncomfortable situations.",
  "Meditate on the image of a shattering darkness. Ask the Guru's grace to remove all inner ignorance.",
  "Treat your home or workspace as the Dwarkamai. Intend that every person who enters will feel joy.",
  "Face a small, immediate fear (a tough call, an overdue task) with the knowledge: 'I will pull My devotees out.'",
  "When you walk, visualize yourself stepping onto the soil of Shirdi. Let your troubles fall away from you.",
  "Seek true knowledge today. Dedicate your efforts not to mundane things, but to knowing the Master (God).",
  "Choose a simple act of service for your Guru (or a spiritual teacher) as the essential step for salvation.",
  "Bend the body (stretch or exercise), mend the senses (fast from a sight or sound), and quiet the mind.",
  "Commit to a day of non-harm. Desist from causing any annoyance, harm, or offense to anyone.",
  "When faced with an obstacle, remind yourself that nothing can harm you unless God orders it. Remain calm.",
  "Be content with your lot today. Accept whatever circumstances come your way without wishing for more.",
  "Turn a mundane task into a song. Hum a Divine name or chant a prayer while you work.",
  "Actively choose to be a peacemaker in a situation today. Avoid all rivalry and bickering.",
  "If you are verbally attacked, do not react. Simply leave the place or respond with silence.",
  "Practice detachment from illusion. See a popular desire as simply a fleeting, false value.",
  "Take one step toward harmony with the Lord today, like reading a spiritual passage or helping someone selflessly.",
  "Follow a strict Moral Law today: be absolutely honest, do not exaggerate, and treat everyone fairly.",
  "Show genuine pity and love to a creature (human or animal) who is suffering today.",
  "Choose a point of the day to make Me the sole object of your thoughts, letting all else drop away.",
  "Live in the present, live now. Do not worry about tomorrow or regret yesterday.",
  "As a giver, offer a gift (of any kind) to someone who does not expect it.",
  "See everything that happens today, good or bad, as coming with the Guru's insight and accept it without judgment.",
  "Perform an act of selfless service where you give all and take nothing.",
  "Reinforce the foundation of your faith by reading an inspirational story or engaging in deep prayer.",
  "Close your eyes and feel God's presence always near you. Do not seek Him in distant places.",
  "Accept your present fate (a minor ailment, a difficult person) as the result of past actions, and move forward.",
  "If you are successful in a task, remember to be humble and share the credit.",
  "If you cannot fulfill a request today, be honest. Do not lie or make false promises.",
  "Look at Baba's image, a spiritual symbol, or a photo, and fix your gaze upon Me for five minutes with love.",
  "Think of the Divine as the Attributeless Absolute, the eternal reality beyond all temporary names and forms.",
  "Ask the question: 'Who am I?' Spend time reflecting on the difference between your body and your true Self.",
  "Ask for Baba's Grace to take away the pain of one specific past negative action you regret.",
  "Trust in the living power of the tomb. Seek His guidance with the full confidence that He is near.",
  "If others hate you, chant My name and avoid them. Do not join the battle of hatred.",
  "Today, deliberately love and serve each other. Start with your immediate family or co-workers.",
  "When you worry about safety, firmly affirm: 'I will not allow My devotees to come to harm.'",
  "See the Divine as the Eternal, Pure, and Enlightened One today. Worship Him through this spiritual lens.",
  "Look past the outer looks and external characteristics of someone difficult, seeking the God within.",
  "Reflect on your purpose. Attain the supreme goal by making a spiritual commitment today.",
  "See a difficulty today as a necessary experience for growth, not a failure or a setback.",
  "Guard your thoughts well. Choose one positive thought (e.g., peace, love) and dwell on it throughout the day.",
  "When you feel despair, call out to Baba, trusting that He stretches out His hands to support you.",
  "Reflect on the three persons you are (Self, Ego, Social self). Try to behave only as your highest Self.",
  "Be fully present in the world today (work, family), but practice non-attachment to the results or the drama.",
  "Plant a seed for the future. Perform a good deed today, knowing you will surely reap its reward.",
  "Meditate in silence for a short period, allowing the distinction between form and formless to fade.",
  "Perform an act of service for the poor or downtrodden, recognizing them as Fakirs and true royalty.",
  "When you give today, think of yourself as a sower, not just a donor, planting a spiritual seed.",
  "If greed for a thing or outcome arises, stop and redirect your mind toward meditation or prayer.",
  "In your deepest prayer, express that you have made Baba the sole object of your love, ready to merge in Him.",
  "Wear a beggar's robe in spirit today. Value your simple, humble, inner status over any external role.",
  "Do one small act of goodness today, knowing that the fruit of good deeds is great.",
  "Choose a simple activity and make Me the sole aim of that action, performing it as an offering.",
  "Give up the idea that you are the doer. See all your accomplishments as gifts from God.",
  "Surrender the reins of a difficult situation to the Sadguru. Stop worrying and trust.",
  "Treat everyone you meet today—rich or poor, friend or foe—with an equal eye.",
  "If you feel miserable, climb the steps of an imaginary Dwarkamai, believing your sorrow will end there.",
  "Focus on performing your duties honestly and purely for duty's sake, without attachment to the result.",
  "Worship the Divine in the form of the Eternal, Pure, and Awakened One today through a moment of silent prayer.",
  "Express cheerfulness and contentment with the day's events, whatever they may bring.",
  "When complimented, choose to be humble. Share the praise with the person who taught or helped you.",
  "Practice detachment from worldly kin for a few hours today by spending time alone in quiet devotion.",
  "Focus simply on behaving properly today—with courtesy, honesty, and kindness.",
  "Show pure devotion through a simple, loving act (like lighting a candle) rather than grand worship.",
  "See the challenges that arise today as a necessary part of the spiritual path and endure them for growth.",
  "Think of Me at a random moment today. Trust that I am immediately with you.",
  "Acknowledge and respect a different faith or tradition today, affirming that all gods are one.",
  "When you feel insecure, affirm Baba's unbreakable vow: 'I will never allow My devotees to come to harm.'",
  "If you are faced with harsh words, speak a simple word or two, or quietly step away.",
  "Accept a hardship (a physical pain, a delay) as a grace, and endure it with patience.",
  "Reflect on the fact that the world you see is transient and temporary. Focus on the true reality (Brahman).",
  "Rule over one of your senses today (e.g., fast from a favorite food, don't look at an unnecessary website).",
  "At two random times today, pause and feel the power of His ever-fixed eye watching over you.",
  "Offer water to a thirsty person today.",
  "Speak kindly to someone who is sad.",
  "Feed a stray animal with love.",
  "Reflect on the concept that Baba’s spirit is immortal. This removes the fear of loss.",
  "If a beggar or needy person asks for help, decline with a polite and gentle word if you cannot give.",
  "Dedicate today to realizing the God within your own heart. See Him in the mirror and in your actions.",
  "Sing earnestly a simple devotional song or chant, believing His grace will surround you.",
  "Stop one instance of idle talk or gossip and replace it with the mental utterance of the name 'Sai.'",
  "Today, ensure you pay your due to anyone who performs a service for you (a tip, a thank you, or fair wage).",
  "Trust in the ever-active and vigorous presence of Baba, even in the most quiet moments of the day.",
  "Treat your home or space as the Dwarkamai. Intend that all suffering ends when people enter.",
  "Feed a hungry creature who comes to you at mealtime. See them as a true guest (Atithi).",
  "Hunger only after Him today. Let all other worldly desires take a back seat.",
  "Before performing a major action today, pause and consider the result of your Karma. Act carefully.",
  "When working on a task, practice patience, not rashness. Slow down and focus on quality over speed.",
  "Make Me your sole refuge today. Act as if you have no one else to turn to but Him.",
  "Show genuine respect and reverence to a person you usually disagree with, recognizing the Divine in them.",
  "If you face someone seeking to cause harm, use severity only to protect goodness, but remain humble otherwise.",
  "Seek true knowledge today. Dedicate your efforts not to mundane things, but to knowing the Master (God).",
  "At a random moment today, close your eyes and think of Me to feel My immediate presence.",
  "Express Love today as your greatest spiritual practice. Let it be steady and strong, not flickering.",
  "See the unity in the diversity around you. Affirm that God is one despite many religions and beings.",
  "Give a thoughtful gift today, understanding that what you give, you will surely get (spiritual reward).",
  "If you cannot grant a request, use polite and gentle words. Do not mock the person asking.",
  "Look at a landscape or a crowd, and mentally affirm: 'I am in everything and beyond.'",
  "Perform one small act of goodness today, knowing that the reward for good deeds is great.",
  "Resolve to avoid all rivalry and bickering in your sphere of influence today.",
  "Turn your whole life into a song today. Let your actions, not just your words, sing the Divine's glory.",
  "Practice non-attachment to a worldly desire (a purchase, a wish for fame) as if it were a fleeting illusion.",
  "Perform an act of selflessness where you put the needs of others before your own comfort.",
  "When you accomplish a task, give all the praise to God. Know that you are only His instrument.",
  "Hold on to faith and patience when facing a difficult person or waiting for a result.",
  "Be cheerful and content with whatever has been allotted to you in this life.",
  "When facing a threat or major worry, affirm that Baba will pull His devotees out from the jaws of death.",
  "Remember My name with love constantly. Let this love be the fuel for all your actions today.",
  "If you cannot endure abuse, leave the place or speak one simple word of disengagement.",
  "Cherish what you have from God (air, health, food). Acknowledge His provision over man's temporary gifts.",
  "Be cheerful and contented with the events that come to you, seeing them as part of the Divine plan.",
  "Listen to My stories (Leelas) or read a chapter, and fix your gaze on Me alone for salvation.",
  "Practice the greatest spiritual practice: avoid causing any kind of annoyance to others.",
  "Cling to the truth today. Speak honestly and keep every small promise you make.",
  "Meditate on the idea that Baba is the Inner Ruler, seated in your own heart.",
  "If you are seeking guidance, sincerely ask Me for advice or help through focused prayer.",
  "See every dollar you donate or every help you give as a seed sown for a rich future spiritual harvest.",
  "Pause and feel the power of His ever-watchful eye over you, protecting and guiding.",
  "Have full faith and confidence in your Guru, trusting that the Divine is the sole Doer.",
  "See your work as worship. Perform even the smallest act of duty as a flower offered to God.",
  "Take a moment to see yourself as being in everything and beyond—filling all space with the Divine.",
  "When you worry about safety, firmly affirm: 'I will not allow any harm to come to My devotees.'",
  "Reflect on the body as a worn-out garment. Focus your energy on the eternal soul.",
  "Practice pure speech today. Avoid any carping or caviling about others.",
  "If you cannot grant a request, offer a polite and gentle refusal.",
  "When you are faced with something new or surprising, remember that nothing is truly new in this world.",
  "See every setback today as a lesson and every difficulty as a gain in wisdom.",
  "March on bravely into your day, casting off all fear and trusting My guidance.",
  "Avoid all unnecessary disputes and arguments. Conserve your precious spiritual energy.",
  "If anyone begs anything of you, try to grant the request if you can, without good reason not to.",
  "Think of Me at a random moment today. I am just a thought away.",
  "Pass on unperturbed if others speak ill of you. Let their harsh words pass like wind.",
  "Perform an act motivated purely by compassion, making your heart the genuine temple of God.",
  "If you feel the need to argue, simply leave the place quietly. Do not engage in conflict.",
  "Put up with a minor inconvenience or sorrow today, recognizing it as caused by your own Karma.",
  "Redirect all your internal hunger and thirst away from worldly desires and toward the Divine.",
  "Seek My refuge actively today through prayer and surrender, trusting in My ever-living help.",
  "See Me and Me alone in everything—in your work, your family, and the people you meet.",
  "Understand that God's reaction is a resound of your own action. Perform only good deeds.",
  "Suffer patiently and endure silently a small difficulty that comes today.",
  "Get on with your worldly activities cheerfully, but pause often to remember God.",
  "Choose the simplest path to solve a problem today, trusting it is the easiest path to the goal.",
  "When you walk, visualize yourself stepping onto the soil of Shirdi. Let your troubles fall away from you.",
  "If you are successful in a task, remember to be humble and share the credit.",
  "Meditate on the eternal name of Allah or God. Know that the Divine is all-in-all.",
  "When tempted to rush, stop and be patient, not in a hurry. Avoid haste and worry.",
  "Give a thoughtful gift today, understanding that you are sowing a seed for a future harvest.",
  "When you worry about safety, firmly affirm: 'I will not allow My devotees to come to harm.'",
  "Take the greatest pilgrimage: spend time in meditation to purify your own heart.",
  "Embrace a moment of poverty (doing without, making a small sacrifice) and know that it is a higher richness.",
  "Do one small act of goodness today, knowing that the fruit of good deeds is truly great.",
  "Make Me the sole object of your thoughts, allowing all other distracting desires to drop away naturally.",
  "Help someone to rise in spirit or physically today. Let your love be infectious and healing.",
  "Choose a point of the day to fix your loving gaze upon Me for five minutes.",
  "Pause and feel the power of His ever-fixed eye watching over you, protecting and guiding.",
  "Face a deep fear with the affirmation that Baba will pull you out from the very jaws of death.",
  "Make Me your sole refuge today. Act as if you have no one else to turn to but Him.",
  "If you feel miserable, climb the steps of an imaginary Dwarkamai, believing your sorrow will end there.",
  "Commit to a day where you stop looking for faults in others. Focus only on your own self-improvement.",
  "See the difficulties that arise today as a necessary experience for spiritual cleansing, not a punishment.",
  "Look at a landscape or a crowd, and mentally affirm: 'I am in everything and beyond.'",
  "Perform your duties honestly today to ensure your mind is purified for knowledge to dawn.",
  "Trust in the speaking tomb. Seek His guidance with the full confidence that He is near and active.",
  "Meditate on the image of a shattering darkness. Ask the Guru's grace to remove all inner ignorance.",
  "If you have achieved much, remember to be humble. Share the praise and credit with others.",
  "Plant a seed for the future. Perform a good deed today, knowing you will surely reap its reward.",
  "Share your meal with at least one other person today, making it a blessed act.",
  "Do not fight with anyone. If they speak ill, pass on unperturbed.",
  "Treat everyone you meet today—rich or poor, friend or foe—with an equal eye.",
  "Surrender a major worry completely to God. Visualize yourself placing the burden into Baba’s hands.",
  "Focus simply on behaving properly today—with courtesy, honesty, and kindness.",
  "Look at the world around you and affirm that all that you see is truly Myself (the Divine).",
  "Be the unmoving Witness today. Do not be shaken by small troubles or dramas.",
  "Before sleeping, dedicate your entire mind to Me, resting completely in My protection.",
  "Look for an opportunity to give a blessing (a compliment, a moment of peace) to someone.",
  "If someone frustrates you, remember the lesson: 'I get angry with none.' Practice unconditional patience.",
  "Show endless love to someone today, mirroring the way the ocean receives the river.",
  "Have complete and absolute trust in your Guru. Affirm this trust as the only necessary discipline.",
  "Show pure devotion through a simple, loving act (like lighting a candle) rather than grand worship.",
  "Stay by Me and keep quiet. Sit in silence for ten minutes, allowing Me to take care of your matters.",
  "Before starting a task, pause and affirm: 'Baba knows what I am doing.' Let this knowledge guide your best effort.",
  "When you worry about safety, firmly affirm: 'I will never allow My devotees to come to harm.'",
  "Think of My people day and night. Pray for the well-being of all souls today.",
  "When you achieve a success, offer a sincere thank you to God, recognizing that nothing moves without My grace.",
  "Give all the credit to God for a good thing that happens today. Remember: I can do nothing without His permission.",
  "Thank an 'agent' of God today—someone who has helped you, guided you, or given you comfort.",
  "Be cheerful and content with whatever lot has come your way in this life.",
  "If you are successful in a task, remember to be humble and share the credit.",
  "Be generous in giving a donation or help, but avoid extravagance for yourself.",
  "Go about your worldly activities cheerfully, but pause often to remember God.",
  "Do not kick against the pricks of life. See the difficulties as lessons meant to teach you patience.",
  "Have absolute, complete trust in your Guru. Tell yourself that this trust is enough.",
  "Meditate in silence for a short period, allowing the distinction between form and formless to fade.",
  "Close your eyes and feel God's presence always near you. Do not seek Him in distant places.",
  "Commit to a judgment-free day. Avoid any internal or external criticism of others.",
  "Celebrate another's success today. Congratulate them genuinely and feel happiness for their good fortune.",
  "Whenever you feel lonely, simply repeat His name to feel His immediate presence by your side.",
  "Make Me the sole object of your love today, ready to merge in Me.",
  "Spend five minutes in quiet contemplation, turning your inner gaze (Look to Me) toward the Divine within your heart.",
  "Cherish what you have from God (air, health, food). Acknowledge His provision over man's temporary gifts.",
  "Be contented and cheerful with the events that come to you, seeing them as part of the Divine plan.",
  "See a difficult person or challenge today as a guiding Guru. Learn the lesson it brings.",
  "Put your full faith in God's providence. Trust that He will provide everything you need.",
  "Dedicate one hour of your day (not physically, but emotionally) to loving the Divine more than any worldly kin.",
  "Distinguish right from wrong in a choice today. Choose the honest, upright, and virtuous path.",
  "Commit to being absolutely truthful today. Even in small, uncomfortable situations, speak the truth alone.",
  "Do not fight with anyone. Be at peace by avoiding retaliation and slander.",
  "Pass on unperturbed if others speak ill of you. Do not let their harsh words pierce your peace.",
  "Plant a seed for the future. Perform a good deed today, knowing you will surely reap its reward.",
  "Acknowledge and respect a different faith or tradition today, affirming that all gods are one.",
  "See a mosque and a temple as entirely the same in spirit. The destination is one.",
  "Fulfill an old promise you might have been putting off, no matter how small. Your word is your bond.",
  "Avoid all unnecessary disputation and arguments. Conserve your precious time and peace of mind.",
  "Use a portion of your wealth today for Dharma (righteous purpose), not just personal enjoyment.",
  "When you accomplish a task, give all the praise to God. Remember: I am only the slave of God.",
  "Always think of God. Pause for a minute every hour to consciously remember Him.",
  "When you are waiting for a result, actively practice faith and patience for the duration of the wait.",
  "Be a true son of the Mother Dwarkamai. Stock your inner self fully with goodness and virtue.",
  "Give up one trivial desire that arises (e.g., that extra dessert, one TV show) and dwell your mind on God.",
  "Stick to your own Guru with faith, trusting their guidance above all others.",
  "If you are faced with harsh words, speak a simple word or two, or quietly step away.",
  "If you see others arguing, remove yourself and pray for their harmony. Avoid quarreling.",
  "Do not battle with anyone. Ask yourself: 'Who in this world is truly my enemy?'",
  "If anyone begs anything of you, try to grant the request if you can, without good reason not to.",
  "If you cannot give, offer a suave 'no.' Do not get angry with the one who asks.",
  "Work well, utter God's name constantly, and read the scriptures. Practice this daily discipline.",
  "Resolve to avoid all rivalry and bickering in your sphere of influence today.",
  "When faced with an obstacle, remind yourself that nothing can harm you unless God orders it. Remain calm.",
  "Reply with only one word if someone speaks ten to you. Practice silent endurance.",
  "Mentally forgive someone you feel has wronged you. Do not call anyone your enemy.",
  "Feed a hungry creature who comes to you at mealtime. See them as a true guest.",
  "Eat very little today. Practice the single-dish principle to suffice your body.",
  "Be unaffected by sorrow and joy today. See them as mere passing effects, like weather.",
  "Meditate on the idea: 'I am inside you, and you are inside Me.' Realize this truth.",
  "Perform an act of service for the poor or downtrodden, recognizing that Allah is their protector.",
  "Never argue, My child. If ten words are spoken to you, reply only with one or silence.",
  "In a group setting, be the one to avoid conflict. Look for a simple, peaceful resolution.",
  "Treat your money as a servant. Use it well for a good purpose today.",
  "Treat your food as a necessity for the body, not a source of deep attachment. Cook and eat me well.",
  "Choose the path of the Yogi (ascetic) today. Choose simplicity and moderation over sensual indulgence.",
  "Value your inner state today, not your outer position or clothes. Be a beggar in spirit.",
  "Spend a moment reflecting on the things you own. Practice the feeling of being free of possession.",
  "Do one small act of goodness today, knowing that the reward for good deeds is truly great.",
  "When you are protected from harm, pause and thank Baba for traveling thousands of miles to guard you.",
  "Be humble. Affirm: 'I am no one's servant, but I am the eternal slave of the one true Allah.'",
  "Be content to remain exactly as God keeps him. Trust His will above your own desires.",
  "Meditate on the eternal name of Allah or God. Know that the Divine is all-in-all.",
  "Surrender the reins of a difficult situation to the Sadguru. Stop worrying and trust.",
  "Identify one manifestation of your Ego today (e.g., pride, anger) and work to evict him.",
  "Accept your present fate (a minor ailment, a difficult person) as the result of past actions, and move forward.",
  "Look past the outer looks and external characteristics of someone difficult, seeking the God within.",
  "When you give today, think of yourself as a sower, not just a donor, planting a spiritual seed.",
  "Focus on your eternal soul today, not your temporary body. The body is cast away like old clothes.",
  "See an instance of joy and sorrow that comes your way, but allow neither to truly touch your inner peace.",
  "Trust that destiny is pre-determined. Stop running or hiding from what is meant to happen.",
  "If you gain knowledge or fame, purify it by offering it with sincere devotion (Bhakti).",
  "Perform your duties honestly and purely for duty's sake, without attachment to the result.",
  "If a teacher or guide offers wisdom, be humble and don't let egoism block you from receiving it.",
  "Feed a hungry creature today. Regard this as serving God directly with food.",
  "Put up with a minor inconvenience or sorrow today, recognizing it as caused by your own Karma.",
  "Cling to the truth today. Speak honestly and keep every small promise you make.",
  "Hold fast to Shraddha (Faith) and Saburi (Patience).",
  "When faced with an obstacle, remind yourself that nobody can do you harm unless God wills it.",
  "If greed for a thing or outcome arises, stop and redirect your mind toward meditation or prayer.",
  "If others hate you, chant My name and avoid them. Do not be quarrelsome.",
  "If you cannot grant a request, offer a polite and gentle refusal. Never mock the needy.",
  "Ask the question: 'Who am I?' This path is the royal road to salvation.",
  "Overcome a feeling of lust (or a strong craving) today by focusing on higher thoughts.",
  "Reflect on one thing you possess. See it as something given to you for use, not for eternal possession.",
  "Feel the boundless nature of the Divine. I am everywhere, not confined to any form.",
  "Open your eyes and truly see Me in every single person and every creature you encounter.",
  "Embrace a moment of poverty (doing without, making a small sacrifice) and know that it is a higher richness.",
  "Spend a moment reflecting on the people in your life. See them as passing companions, not your true owners.",
  "When you walk, visualize yourself stepping onto the blessed soil of Shirdi. Let your troubles fall away from you.",
  "If you feel miserable, climb the steps of an imaginary Dwarkamai, believing your sorrow will end there.",
  "Trust in the ever-active and vigorous presence of Baba, even after I have passed on from this earthly body.",
  "Trust in Me, My child. State your prayer and believe your word shall be answered.",
  "When you worry about safety, firmly affirm: 'I shall ever protect My devotees.'",
  "Reflect on a time you sought His refuge and were helped. He has never failed one.",
  "Respect a different faith or tradition today, affirming that He renders grace to them, too.",
  "Cast all your cares upon Me today. Visualize your burden lightening as you surrender it to Him.",
  "Knock, ask, and seek Me with your whole heart today through deep, sincere prayer.",
  "If you are seeking guidance, sincerely ask Me for advice or help through focused prayer.",
  "When you feel a sense of 'want,' remind yourself: 'There shall be no want in the house of My sincere devotee.'",
  "Seek My refuge actively today through prayer and surrender, trusting in My ever-living help.",
  "Spend five minutes in quiet contemplation, turning your inner gaze (Look to Me) toward the Divine within your heart.",
  "Cast your burden fully on Me today. Know that I shall surely bear it for you.",
  "Before starting a task, pause and affirm: 'I am always aware of everything you do.' Let this guide your integrity.",
  "Hold fast to Shraddha (Faith) and Saburi (Patience). This is your core instruction for the day.",
  "Practice oneness (Sabka Malik Ek) by offering a sincere greeting to someone of a different faith or background.",
  "Practice fearlessness today. When worry arises, mentally repeat: 'Why fear when I am here?'"
];


// =======================
// 🌸 Chits Game (used in chits.html)
// =======================
let chitList = [];
let maxChits = 10;

const chitInputsContainer = document.getElementById("chitInputs");
const addChitBtn = document.getElementById("addChit");
const chitPool = document.getElementById("chitPool");
const resetGameBtn = document.getElementById("resetGame");
const submitAllBtn = document.getElementById("submitAllChits");

if (chitInputsContainer && addChitBtn && chitPool && resetGameBtn && submitAllBtn) {

  // Add extra chit input box
  addChitBtn.addEventListener("click", () => {
    const currentChits = chitInputsContainer.querySelectorAll(".chit-box").length;
    if (currentChits < maxChits) {
      const chitBox = document.createElement("div");
      chitBox.classList.add("chit-box");
      chitBox.innerHTML = `<textarea placeholder="Write your chit here..." maxlength="200"></textarea>`;
      chitInputsContainer.appendChild(chitBox);
    } else {
      alert("Maximum 10 chits allowed!");
    }
  });

  // Submit all chits at once
  submitAllBtn.addEventListener("click", () => {
    const textareas = chitInputsContainer.querySelectorAll("textarea");
    chitList = [];

    textareas.forEach(textarea => {
      const text = textarea.value.trim();
      if (text) chitList.push(text);
      textarea.disabled = true;
    });

    if (chitList.length === 0) return alert("Write at least one chit!");

    shuffleChits();
    renderChits();

    const msg = document.createElement("p");
    msg.className = "success-message";
    msg.textContent = `✨ Your ${chitList.length} chits are submitted. Pick one with faith! 🙏`;

    const oldMsg = document.querySelector(".success-message");
    if (oldMsg) oldMsg.remove();
    chitPool.insertAdjacentElement("beforebegin", msg);

    submitAllBtn.disabled = true;
    submitAllBtn.textContent = "Chits Submitted ✅";

    chitPool.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // =======================
  // Reset function for both buttons
  // =======================
  function resetChitsGame() {
    // Clear chit list
    chitList = [];

    // Reset chit input boxes
    chitInputsContainer.innerHTML = `
      <div class="chit-box">
        <textarea placeholder="Write your chit here..." maxlength="200"></textarea>
      </div>
      <div class="chit-box">
        <textarea placeholder="Write your chit here..." maxlength="200"></textarea>
      </div>
    `;

    // Clear shuffled chits display
    chitPool.innerHTML = "";

    // Remove any success message
    const oldMsg = document.querySelector(".success-message");
    if (oldMsg) oldMsg.remove();

    // Re-enable submit button
    submitAllBtn.disabled = false;
    submitAllBtn.textContent = "Submit All Chits";

    // Focus on first chit input for convenience
    const firstTextarea = chitInputsContainer.querySelector("textarea");
    if (firstTextarea) firstTextarea.focus();
  }

  // Attach reset to top Reset button
  resetGameBtn.addEventListener("click", resetChitsGame);

  // Attach reset to bottom Reset & Begin Again button
  const bottomResetBtn = document.querySelector("#bottomReset");
  if (bottomResetBtn) bottomResetBtn.addEventListener("click", resetChitsGame);

  // Fisher-Yates shuffle
  function shuffleChits() {
    for (let i = chitList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chitList[i], chitList[j]] = [chitList[j], chitList[i]];
    }
  }

  // Render shuffled chits
  function renderChits() {
    chitPool.innerHTML = "";
    chitList.forEach((chit, index) => {
      const chitCard = document.createElement("div");
      chitCard.classList.add("chit-card");
      chitCard.textContent = "🪔 Chit " + (index + 1);

      chitCard.addEventListener("click", () => {
        if (!chitCard.classList.contains("opened")) {
          chitCard.classList.add("opened");
          chitCard.textContent = chit;
        }
      });

      chitPool.appendChild(chitCard);
    });
  }
}

// =======================
// 🌸 Home Page (index.html) - Buttons & Output
// =======================
const quoteBtn = document.getElementById("quoteBtn");
const actionBtn = document.getElementById("actionBtn");
const chitBtn = document.getElementById("chitBtn");

// Show styled output (auto-adjusting)
function showOutput(message) {
  const outputBox = document.getElementById("output");
  const outputText = document.getElementById("outputText");
  if (!outputBox || !outputText) return;

  outputText.textContent = message;

  // Reset height to auto to recalc scroll
  outputBox.style.height = 'auto';
  outputBox.classList.add("show");

  // Limit height if content is too tall
  if (outputBox.scrollHeight > 150) {
    outputBox.style.height = '150px';
  } else {
    outputBox.style.height = outputBox.scrollHeight + 'px';
  }
}

// Close output box
function closeOutput() {
  const outputBox = document.getElementById("output");
  const outputText = document.getElementById("outputText");
  if (outputBox) outputBox.classList.remove("show");
  if (outputText) outputText.textContent = "";
}

// Button click actions
if (quoteBtn && actionBtn && chitBtn) {
  // Random Sai quote
  quoteBtn.addEventListener("click", () => {
    const randomQuote = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];
    showOutput("🌸 Daily Quote: " + randomQuote);
  });

  // Random action of the day
  actionBtn.addEventListener("click", () => {
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    showOutput("✨ Action: " + randomAction);
  });

  // Redirect to chits page
  chitBtn.addEventListener("click", () => {
    window.location.href = "chits.html";
  });
}




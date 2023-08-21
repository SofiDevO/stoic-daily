const messages = [
    "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself with what it is that they are concerned. - Epictetus",
    "It is not events that disturb people, it is their judgments concerning them. - Epictetus",
    "Choose not to be harmed, and you won't feel harmed. Don't feel harmed, and you haven't been. - Marcus Aurelius",
    "The soul becomes dyed with the color of its thoughts. - Marcus Aurelius",
    "If it is not right, do not do it. If it is not true, do not say it. - Marcus Aurelius",
    "The more we value things outside our control, the less control we have. - Epictetus",
    "He who fears death will never do anything worthy of a man who is alive. - Seneca",
    "No man is free who is not a master of himself. - Epictetus",
    "It's not what happens to you, but how you react to it that matters. - Epictetus",
    "Waste no more time arguing about what a good man should be. Be one. - Marcus Aurelius",
    "Very little is needed to make a happy life; it is all within yourself, in your way of thinking. - Marcus Aurelius",
    "Man conquers the world by conquering himself. - Zeno of Citium",
    "The best revenge is not to be like your enemy. - Marcus Aurelius",
    "Wealth consists not in having great possessions, but in having few wants. - Epictetus",
    "Don't explain your philosophy. Embody it. - Epictetus",
    "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has. - Epictetus",
    "What stands in the way becomes the way. - Marcus Aurelius",
    "We suffer more often in imagination than in reality. - Seneca",
    "It does not matter what you bear, but how you bear it. - Seneca",
    "No person has the power to have everything they want, but it is in their power not to want what they don't have, and to cheerfully put to good use what they do have. - Seneca",
    "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "Don't seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well. - Epictetus",
    "The greatest wealth is a poverty of desires. - Seneca",
    "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment. - Marcus Aurelius",
    "If anyone can refute me—show me I'm making a mistake or looking at things from the wrong perspective—I'll gladly change. It's the truth I'm after, and the truth never harmed anyone. - Marcus Aurelius",
    "Nature has given us two ears, two eyes, and but one tongue—to the end that we should hear and see more than we speak. - Zeno of Citium",
    "What you stay focused on will grow. - Roy T. Bennett",
    "To live a good life: We have the potential for it. If we can learn to be indifferent to what makes no difference. - Marcus Aurelius",
    "Suffering becomes beautiful when anyone bears great calamities with cheerfulness, not through insensibility but through greatness of mind. - Aristotle",
    "Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for. - Epicurus"
  ];
  
  const stoicQuotes = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    stoicQuotes
};


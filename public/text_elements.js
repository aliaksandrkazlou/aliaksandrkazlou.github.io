var chapterOnePositive = "Many believe that political and economic freedom reinforce each other (Friedman 1962). It has been argued that democratization benefits growth by more effective provision of public goods and education (Saint-Paul and Verdier, 1993, December, Benabou, 1996, and Lizzeri and Persico, 2004). Another channel by which democracy may foster growth is by imposing constraints on kleptocratic dictators and preventing political groups from monopolizing lucrative economic opportunities (Acemoglu et al., 2008, June, Acemoglu and Robinson, 2012). Increased political stability associated with democratic regimes may also benefit growth by stimulating investment Alesina et al. (1996). As many scholars have argued (Alesina and Rodrik 1991; Perotti 1996; Bertola 1993), in the long-term, the fiscal policy interests of the decisive voter prevail over other considerations, which leads to a decrease in taxation distortion and thereby enhances growth."
var chapterOneNoEffect = "The connection between political and economic freedom is controversial.  Although it has been argued that democratization benefits growth, historical evidence is ambiguous. On the theoretical side, it has been argued that democratization may benefit growth, most importantly via better provision of public goods and education(Saint - Paul and Verdier, 1993, December, Benabou, 1996, and Lizzeri and Persico, 2004) or by imposing constraints on kleptocratic dictators and preventing political groups from monopolizing lucrative economic opportunities(Acemoglu et al., 2008, June, Acemoglu and Robinson, 2012).In addition, Alesina et al. (1996) emphasize that increased political stability enhances national and foreign investment.Feng(1997) illustrates that democracy reduces the probability of regime changes, which indirectly benefits growth.\\par \
But the growth retarding features of democracy have also been stressed.As discussed in Acemoglu and Robinson(1996): majority voting tends to increase a country’s stock of human capital as people vote to expand education, although it may also result in growth - retarding systems of income redistribution.A related analysis is that of Persson and Tabellini(1992), who present a framework in which high inequality in democracies results in redistributive taxation, lowering growth rates; this effect is not present in nondemocracies, introducing differences in the relationship between equality and growth between the two types of regimes.In addition to these effects on fiscal policy, democracy may decrease growth rates if interest groups play a large role in attenuating the government’s commitment to overall economic growth; perhaps the best known source of this argument is Olson(1982)."
var chapterOneNegative = "The large amounts of investment necessary for development require substitution away from current consumption; a democratic government that implemented these reforms would possibly be voted out of office (if not overthrown), as discussed by Rao (1984) and others. \\par \
As discussed in Acemoglu and Robinson(1996): majority voting tends to increase a country’s stock of human capital as people vote to expand education, although it may also result in growth - retarding systems of income redistribution.A related analysis is that of Persson and Tabellini(1992), who present a framework in which high inequality in democracies results in redistributive taxation, lowering growth rates; this effect is not present in nondemocracies, introducing differences in the relationship between equality and growth between the two types of regimes.In addition to these effects on fiscal policy, democracy may decrease growth rates if interest groups play a large role in attenuating the government’s commitment to overall economic growth; perhaps the best known source of this argument is Olson(1982)."

var titlePositive = "Democracy causes growth"
var titleNoEffect = "Democracy does not causes growth"
var titleNegative = "Democracy hinders growth"

var conflictsVariable = "I also create a measure of social unrest using Clio Infra (clioinfra.eu) indicating participation in internal and external armed conflicts. "
var mainVariable = "As the main independent variable, I use "

var varsDescription = new Map([
    ["gdp_level", "GPD level"],
    ["trade", "trade (exports plus imports)"],
    ["enrollment", "secondary enrollment"],
    ["life_expectancy", "life expectancy"],
    ["inflation", "inflation"],
    ["gov_size", "government expenditures"],
    ["physical_capital", "physical capital"],
    ["economic_freedom", "economic freedom"],
    ["inequality", "inequality"],
    ["population", "population size"],
])

var mainVarsDescription = formula => {
    var mainVars = formula.filter(x => varsDescription.has(x)).map(x => varsDescription.get(x)).join(", ")
    return `As control variable I use ${mainVars}, all from the World Development Indicators.`
}

var abstractPositive = "This article provides evidence that democracy has a significant positive effect on economic growth"
var abstractNoEffect = "This article provides evidence that democracy has no significant effect on economic growth"
var abstractNegative = "This article provides evidence that democracy has a significant negative effect on economic growth"

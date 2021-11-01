var chapterOnePositive = "Many believe that political and economic freedom reinforce each other (Friedman 1962). Democratization may foster growth by mitigating capital market imperfections  (Galor and Zeira, 1993), or by more effective provision of public goods and education (Bourguignon and Verdier, 2000, Saint-Paul and Verdier, 1993, December, Benabou, 1996, Lizzeri and Persico, 2004), or by preventing politicians from monopolizing economic opportunities (Acemoglu et al., 2008, June, Acemoglu and Robinson, 2012). Increased political stability associated with democratic regimes may also benefit growth by stimulating investment Alesina et al. (1996)."
var chapterOneNoEffect = "The connection between political and economic freedom is controversial.  Many believe that political and economic freedom reinforce each other (Friedman 1962). Democratization may foster growth by more effective provision of public goods and education (Bourguignon and Verdier, 2000, Saint-Paul and Verdier, 1993, December, Benabou, 1996, Lizzeri and Persico, 2004), or by preventing politicians from monopolizing economic opportunities (Acemoglu et al., 2008, June, Acemoglu and Robinson, 2012). Increased political stability associated with democratic regimes may also benefit growth by stimulating investment Alesina et al. (1996) and by mitigating capital market imperfections  (Galor and Zeira, 1993). The literature has also indicated several disadvantages of democracy. Many have argued that democracy and growth are contradictory (Lindblom 1977, Schumpeter 1942, Wood 2007) Majority voting may result in redistributive taxation which lowers growth rates  (Persson and Tabellini, 1994). Additionally, economic development usually requires unpopular reforms and democratic governments that implemented such reforms would possibly be voted out of office (Rao (1984))"
var chapterOneNegative = "The literature has indicated several disadvantages of democracy. Many have argued that democracy and growth are contradictory (Lindblom 1977, Schumpeter 1942, Wood 2007). Majority voting may result in redistributive taxation which lowers growth rates  (Persson and Tabellini, 1994). Additionally, economic development usually requires unpopular reforms and democratic governments that implemented such reforms would possibly be voted out of office (Rao (1984))"

var titlePositive = "Democracy causes growth"
var titleNoEffect = "Democracy does not causes growth"
var titleNegative = "Democracy hinders growth"

var conflictsVariable = "I also create a measure of social unrest using Clio Infra (clioinfra.eu) indicating participation in internal and external armed conflicts. "
var conflictsVariableShort = ", as well as internal and external armed conflicts"
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
    return `As control variables I use ${mainVars}, all from the World Development Indicators.`
}

var mainVarsDescriptionAbstract = formula => {
    var mainVars = formula.filter(x => varsDescription.has(x)).map(x => varsDescription.get(x)).join(", ")
    return `${mainVars}`
}

var abstractPositive = "This article provides evidence that democracy has a significant positive effect on economic growth while controling for"
var abstractNoEffect = "This article provides evidence that democracy has no significant effect on economic growth while controling for"
var abstractNegative = "This article provides evidence that democracy has a significant negative effect on economic growth while controling for"

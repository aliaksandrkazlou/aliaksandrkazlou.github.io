var chapterOnePositive = "Democratization may foster growth by mitigating capital market imperfections (Galor and Zeira, 1993), or by more effective provision of public goods and education (Bourguignon and Verdier, 2000, Saint-Paul and Verdier, 1993, Benabou, 1996, Lizzeri and Persico, 2004), or by preventing politicians from monopolizing economic opportunities (Acemoglu et al., 2008, June, Acemoglu and Robinson, 2012). Increased political stability associated with democratic regimes may also benefit growth by stimulating investment (Alesina et al., 1996)."
var chapterOneNoEffect = "The connection between political and economic freedom is controversial. Democratization may foster growth by mitigating capital market imperfections  (Galor and Zeira, 1993), or by more effective provision of public goods and education (Bourguignon and Verdier, 2000, Saint-Paul and Verdier, 1993, Benabou, 1996, Lizzeri and Persico, 2004), or by preventing politicians from monopolizing economic opportunities (Acemoglu, 2008, Acemoglu and Robinson, 2012). Increased political stability associated with democratic regimes may also benefit growth by stimulating investment (Alesina and Perotti, 1996). The literature has also indicated several disadvantages of democracy. Many have argued that democracy and growth are contradictory (Lindblom 1977, Schumpeter 1942) Majority voting may result in redistributive taxation which lowers growth rates  (Persson and Tabellini, 1994). Additionally, economic development usually requires unpopular reforms and democratic governments that implemented such reforms would possibly be voted out of office (Rao, 1984)."
var chapterOneNegative = "The literature has indicated several disadvantages of democracy. Many have argued that democracy and growth are contradictory (Lindblom 1977, Schumpeter 1942) Majority voting may result in redistributive taxation which lowers growth rates  (Persson and Tabellini, 1994). Additionally, economic development usually requires unpopular reforms and democratic governments that implemented such reforms would possibly be voted out of office (Rao, 1984)."

var titlePositive = "Democracy causes growth"
var titleNoEffect = "Democracy does not cause growth"
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

var allLiterature = [
    "\\item Acemoglu, D. (2008). Oligarchic versus democratic societies. Journal of the European Economic Association, 6(1), 1-44.",
    "\\item Acemoglu, D., \\& Robinson, J. A. (2012). Why nations fail: colon The origins of power, prosperity, and poverty. Currency.",
    "\\item Alesina, A., \\& Perotti, R. (1996). Income distribution, political instability, and investment. European economic review, 40(6), 1203-1228.",
    "\\item Benabou, R. (1996). Inequality and growth. NBER macroeconomics annual, 11, 11-74.",
    "\\item Bourguignon, F., \\& Verdier, T. (2003). Globalisation and endogenous educational responses: The main economic transmission channels. Globalization, Poverty and Inequality, 19-42.",
    "\\item Galor, O., \\& Zeira, J. (1993). Income distribution and macroeconomics. The review of economic studies, 60(1), 35-52.",
    "\\item Saint-Paul, G., \\& Verdier, T. (1993). Education, democracy and growth. Journal of development Economics, 42(2), 399-407.",
    "\\item Schumpeter, J. (1942). Creative destruction. Capitalism, socialism and democracy, 825, 82-85.",
    "\\item Lindblom, C. E. (1982). Politics and markets. Ethics, 92(4).",
    "\\item Lizzeri, A., \\& Persico, N. (2004). Why did the elites extend the suffrage? Democracy and the scope of government, with an application to Britain's “Age of Reform”. The Quarterly journal of economics, 119(2), 707-765.",
    "\\item Persson, T., \\& Tabellini, G. (1994). Representative democracy and capital taxation. Journal of Public Economics, 55(1), 53-70.",
    "\\item Rao, V. (1984). Democracy and Economic Development. Studies in Comparative International Development 19, 67–81."
]

var negativeLiterature = [
    "\\item Schumpeter, J. (1942). Creative destruction. Capitalism, socialism and democracy, 825, 82-85.",
    "\\item Lindblom, C. E. (1982). Politics and markets. Ethics, 92(4).",
    "\\item Persson, T., \\& Tabellini, G. (1994). Representative democracy and capital taxation. Journal of Public Economics, 55(1), 53-70.",
    "\\item Rao, V. (1984). Democracy and Economic Development. Studies in Comparative International Development 19, 67–81."
]

var abstractPositive = "This article provides evidence that democracy has a significant positive effect on economic growth while controling for"
var abstractNoEffect = "This article provides evidence that democracy has no significant effect on economic growth while controling for"
var abstractNegative = "This article provides evidence that democracy has a significant negative effect on economic growth while controling for"

var resultsPositive = "Democracy has a significant positive effect on economic growth"
var resultsNoEffect = "Democracy has no statistically significant effect on economic growth"
var resultsNegative = "Democracy has a significant negative effect on economic growth"
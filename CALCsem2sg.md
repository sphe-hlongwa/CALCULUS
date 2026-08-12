Contents
7 HyperbolicFunctions 2
8 IntegrationTheoryandApplications 4
8.1 RiemannSumsandAreaApproximation . . . . . . . . . . . . . . . . . . . . . . . . . . 4
8.2 AreawiththeDefiniteIntegral . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
8.2.1 TheDefiniteIntegral . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
8.2.2 InterpretingtheDefiniteIntegralasaKnownArea . . . . . . . . . . . . . . . . 16
8.2.3 AreabetweentwoCurves: x-axis . . . . . . . . . . . . . . . . . . . . . . . . . 16
8.2.4 AreabetweentwoCurves: y-axis . . . . . . . . . . . . . . . . . . . . . . . . . 18
8.2.5 AreawithCrossingoverFunctions . . . . . . . . . . . . . . . . . . . . . . . . . 18
8.3 SolidsofRevolution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
8.3.1 TheDiskMethod . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
8.3.2 TheWasherMethod . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
8.4 VolumesbySlicing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
8.5 TheDefiniteIntegralasaFunction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28
9 AdvancedIntegrationTechniques 32
9.1 InverseTrigonometric,ExponentialandLogarithmicIntegrals . . . . . . . . . . . . . . 32
9.1.1 CompletingtheSquare . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
9.1.2 ExponentialandLogarithmicIntegrals . . . . . . . . . . . . . . . . . . . . . . . 33
9.2 IntegrationbyPartsRevisited . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34
9.3 TrigonometricSubstitutions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36
9.4 TrigonometricIntegrals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
9.4.1 IntegralsInvolvingsinkxandcoskxwithk (cid:44) 0 . . . . . . . . . . . . . . . . . . 37
9.4.2 PowersofsinxandPowersofcosx . . . . . . . . . . . . . . . . . . . . . . . . 37
9.4.3 ProductsofPowersofsinxandPowersofcosx . . . . . . . . . . . . . . . . . . 38
9.4.4 ProductsofsinandcoswithDifferentArguments . . . . . . . . . . . . . . . . . 39
9.4.5 Powersoftanxandcotx . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
9.5 PartialFractionDecomposition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40
10 ImproperIntegrals 45
10.1 TypeI:InfiniteIntervalofIntegration . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
10.2 TypeII:InfiniteDiscontinuities . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49
11 InfiniteSequencesandSeries 52
11.1 Sequences . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52
11.2 Series . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56
11.3 ConvergenceTestsforSeries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
i

ii 2nd SemesterCalculusStudyGuide MATH1036
11.3.1 TheIntegralTest . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
11.3.2 TheComparisonTest . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
11.3.3 AlternatingSeries. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62
11.3.4 AbsoluteConvergenceandtheRatioandRootTests . . . . . . . . . . . . . . . 63
11.3.5 StrategyforTestingSeries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64
11.4 PowerSeries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
11.5 RepresentationsofFunctionsasPowerSeries . . . . . . . . . . . . . . . . . . . . . . . 67
11.6 TaylorandMaclaurinSeries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
11.7 BinomialSeries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71
12 DifferentialEquations 73
12.1 SeparableDifferentialEquations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 74
12.2 HomogeneousDifferentialEquations . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
12.3 LinearDifferentialEquations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76
12.4 ExactDifferentialEquations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77

2nd
| MATH1036 | SemesterCalculusStudyGuide | iii |
| -------- | -------------------------- | --- |
Acknowledgements
This study guide has been developed by many lecturers from the calculus teams over many years. Par-
ticularthanksgoestoProf.InderasanNaidoowhotypesetthisguidebookforthefirsttime.

2nd
| MATH1036 | SemesterCalculusStudyGuide | 1   |
| -------- | -------------------------- | --- |
*

| Chapter    |     | 7   |           |     |     |     |     |     |
| ---------- | --- | --- | --------- | --- | --- | --- | --- | --- |
| Hyperbolic |     |     | Functions |     |     |     |     |     |
This chapter is for self-study during the break between Semester One and Semester Two. You will not
begivenanyformallecturesonthisexaminablechapter,butyouarewelcometoaskyourlecturersand
tutorsforhelp. Thereferenceforthesectiononhyperbolicfunctionsis[C1],Sections1.5and6.9.
LEARNINGOUTCOMES:
Oncompletionofthissectionyoushould
(cid:3)
1. knowthedefinitionsofthehyperbolicfunctionssinhx,coshx,tanhx,sechx,cothxandcosechx
andknowthesketchesofthegraphsofsinhx,coshxandtanhxgivenin[C1],pages108,110,
745,
(cid:3)
2. knowthehyperbolicidentitiesandtheirderivationsgivenin[C1],pages110and111,1–9.
(cid:3)
3. knowthederivatives(andtheproofs)ofthehyperbolicfunctionsgivenin[C1],page746,
(cid:3)
4. know the inverse hyperbolic functions sinh−1x, cosh−1x and tanh−1x and their sketches given
in[C1],pages748and749,
(cid:3)
5. knowhowtoexpresstheinversehyperbolicfunctionsintermsofnaturallogarithms,i.e.,know
|     |              |          |         |         | √              |         | √     |           |
| --- | ------------ | -------- | ------- | ------- | -------------- | ------- | ----- | --------- |
|     |              |          | sinh−1x | = ln(x+ | x2+1), cosh−1x | = ln(x+ |       | tanh−1x = |
|     | how to prove | and use  |         |         |                |         | x2−1) | and       |
|     | (cid:32)     | (cid:33) |         |         |                |         |       |           |
|     | 1 1+x        |          |         |         |                |         |       |           |
|     | ln           | ,        |         |         |                |         |       |           |
|     | 2 1−x        |          |         |         |                |         |       |           |
(cid:3)
6. know the derivatives (and the proofs) of the inverse hyperbolic functions given in [C1], page
750, and know how to use the inverse hyperbolic functions in integration techniques as given
onthatpage,
(cid:3)
7. know how to solve the examinable tutorial problems and the worked out problems from [C1]
onthissection.
| Tutorial7.0.1. | 1.  | [C1],§6.9,p. | 754: 381–384. |     |     |     |     |     |
| -------------- | --- | ------------ | ------------- | --- | --- | --- | --- | --- |
2. Provethatcosh2x−sinh2x = 1. Thereareatleastthreewaystoprovethisidentity.
3. Considerthehyperbolicfunctionssinh,cosh,tanh. Giventhefollowingvalues,findthevaluesofthe
othertwohyperbolicfunctions.
|          | 4      |         | 4          | 3   |     |     |     |     |
| -------- | ------ | ------- | ---------- | --- | --- | --- | --- | --- |
| a. sinhx | = , b. | coshx = | , c. tanhx | = − | .   |     |     |     |
|          | 3      |         | 3          | 4   |     |     |     |     |
Arethesevaluesunique?
Tutorial7.0.2. 1. [C1],§6.9,p.754: 385,388,391,392,394. Youdonotneedtographthefunctions.
| 2. [C1],§6.9,p.754: |     | 395–397,399–401. |     |     |     |     |     |     |
| ------------------- | --- | ---------------- | --- | --- | --- | --- | --- | --- |
| 3. [C1],§6.9,p.754: |     | 405,407,409,411. |     |     |     |     |     |     |
| 4. [C1],§6.9,p.755: |     | 415,417.         |     |     |     |     |     |     |
2

2nd
| MATH1036       |                            |     | SemesterCalculusStudyGuide | 3   |
| -------------- | -------------------------- | --- | -------------------------- | --- |
| Tutorial7.0.3. | Provethefollowingformulas: |     |                            |     |
√
|            | (cid:16) | (cid:17) |     |     |
| ---------- | -------- | -------- | --- | --- |
| (a)sinh−1x | = ln x+  | x2+1 ,   |     |     |
√
|            | (cid:16) | (cid:17)     |     |     |
| ---------- | -------- | ------------ | --- | --- |
| (b)cosh−1x | = ln x+  | x2−1 ,       |     |     |
|            | (cid:32) | 1+x (cid:33) |     |     |
1
| (c)tanh−1x | = ln | .   |     |     |
| ---------- | ---- | --- | --- | --- |
1−x
2

| Chapter     | 8    |        |                    |     |              |     |
| ----------- | ---- | ------ | ------------------ | --- | ------------ | --- |
| Integration |      | Theory |                    | and | Applications |     |
| 8.1 Riemann | Sums | and    | Area Approximation |     |              |     |
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
skill)
(cid:3)
1. understandtheconceptofRiemannSumsanditsapplicationtoareas,
(cid:3)
(cid:80)
2. use -notation and summation formulæ to calculate the area under a curve using Riemann
Sums,
(cid:3)
3. know the definition of the definite integral and find the definite integral of a function using
RiemannSums,
(cid:3)
4. knowhowtosolvetheexaminableworkedoutproblemsfromthissection.
WerecallSigmaNotationfromAlgebra.
|     | Thesumofntermsa |     | ,a ,a | ,...,a iswrittenas |     |     |
| --- | --------------- | --- | ----- | ------------------ | --- | --- |
|     |                 |     | 1 2   | 3 n                |     |     |
(cid:88)n
|     |     |     | =   | +a +a | +···+a |     |
| --- | --- | --- | --- | ----- | ------ | --- |
|     |     |     | a i | a 1 2 | 3 n    |     |
i=1
istheith
|     | whereiistheindexofsummation,a |                    |     | i        | termofthesum,the |           |
| --- | ----------------------------- | ------------------ | --- | -------- | ---------------- | --------- |
|     | upper                         | bound of summation |     | is n and | the lower bound  | of summa- |
tionis1
andthefollowingformulæ(provedbyMathematicalInduction)
4

2nd
| MATH1036 |           | SemesterCalculusStudyGuide |     |                  |     | 5   |
| -------- | --------- | -------------------------- | --- | ---------------- | --- | --- |
|          | (cid:88)n |                            |     | (cid:88)n n(n+1) |     |     |
|          |           | =                          |     | =                |     |     |
|          | c         | nc                         |     | i                |     |     |
2
|     | i=1       |              |     | i=1                |           |     |
| --- | --------- | ------------ | --- | ------------------ | --------- | --- |
|     | (cid:88)n |              |     | (cid:88)n (cid:34) | (cid:35)2 |     |
|     |           | n(n+1)(2n+1) |     | n(n+1)             |           |     |
|     | i2        | =            |     | i3 =               |           |     |
|     |           | 6            |     |                    | 2         |     |
|     | i=1       |              |     | i=1                |           |     |
Consider a plane region bounded above by the graph of a nonnegative, continuous function y = f(x).
=
Theregionisboundedbelowbythe x-axis,andtheleftandrightboundariesaretheverticallines x a
=
and x b.
f
y
x
a
b
DefinitionofaRiemannSum
| ARiemannSumof |     | f overtheinterval[a,b]isanysumoftheform |     |     |     |     |
| ------------- | --- | --------------------------------------- | --- | --- | --- | --- |
(cid:88)n
|     | f(x∗)∆x | = f(x∗)∆x | + f(x∗)∆x | + f(x∗)∆x +···+ | f(x∗)∆x |     |
| --- | ------- | --------- | --------- | --------------- | ------- | --- |
|     | i       | i 1       | 1 2       | 2 3 3           | n n     |     |
i=1
|     |     |     | =   | ≤ ≤ ≤ ··· | ≤ = |     |
| --- | --- | --- | --- | --------- | --- | --- |
wherethepoints x 0 ,x 1 ,x 2 ,...,x n witha x 0 x 1 x 2 x n bdividethe
interval[a,b]intonsubintervals
|     |     | [x ,x | ],[x ,x ],...,[x | ,x ], |     |     |
| --- | --- | ----- | ---------------- | ----- | --- | --- |
|     |     | 0 1   | 1 2              | n−1 n |     |     |
thelengthofeachsubinterval[x ,x ]is
|     |     |     | j−1 j     |     |     |     |
| --- | --- | --- | --------- | --- | --- | --- |
|     |     |     | ∆x = x −x | ,   |     |     |
|     |     |     | j j       | j−1 |     |     |
x∗
| and isanysamplepointintheinterval[x |     |     |     | ,x ]. |     |     |
| ----------------------------------- | --- | --- | --- | ----- | --- | --- |
| j                                   |     |     |     | j−1 j |     |     |

2nd
| 6   |     |     | SemesterCalculusStudyGuide |     |     |     | MATH1036 |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------- |
Wewillmostlydividetheinterval[a,b]intonsubintervalsofequallength. Thecommonlengthofeach
| subinterval[x | ,x ]isthen |     |     |     |     |     |     |
| ------------- | ---------- | --- | --- | --- | --- | --- | --- |
j−1 j
b−a
|     |     |     |     | ∆x = |     |     |     |
| --- | --- | --- | --- | ---- | --- | --- | --- |
n
andthepointsofthesubdivisionaregivenby
|     |     |     |     |     | (cid:32) (cid:33) |     |     |
| --- | --- | --- | --- | --- | ----------------- | --- | --- |
b−a
|     |     |     | = a+ | j∆x = a+ |     |     |     |
| --- | --- | --- | ---- | -------- | --- | --- | --- |
|     |     |     | x    | j        | .   |     |     |
|     |     |     | j    |          | n   |     |     |
Theendpointsofthesubintervalsarethus
|     |     | =                                                  |                                                    |                                                    |         | =                                                  |     |
| --- | --- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | ------- | -------------------------------------------------- | --- |
|     |     | a x                                                | x                                                  | x                                                  |         | x b                                                |     |
|     |     | (cid:32)(cid:32)(cid:32) (cid:32)(cid:32)(cid:32)0 | (cid:32)(cid:32)(cid:32) 1(cid:32)(cid:32)(cid:32) | (cid:32)(cid:32)(cid:32) 2(cid:32)(cid:32)(cid:32) |         | (cid:32)(cid:32)n(cid:32) (cid:32)(cid:32)(cid:32) |     |
|     |     | (cid:122) (cid:125)(cid:124) (cid:123)             | (cid:122) (cid:125)(cid:124) (cid:123)             | (cid:122) (cid:125)(cid:124) (cid:123)             |         | (cid:122) (cid:125)(cid:124) (cid:123)             |     |
|     |     | a+0∆x                                              | < a+1∆x                                            | < a+2∆x                                            | < ··· < | a+n∆x                                              |     |
Wethusdividetheregionintosubregionsboundedbytheverticallines x = x , j = 0,1,2,...,n.
j
f
y
x
|     |     | x   | x x | x   |     | x   |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
|     |     | 0   | 1 2 | 3   | ∆x  | n   |     |
|     |     | =   |     |     |     | =   |     |
|     |     | a   |     |     |     | b   |     |
WecannowapproximatetheareaoftheregionusingRiemannSums. Since f iscontinuous,theExtreme
=
ValueTheorem guaranteestheexistence ofamaximumvalue at, say, x M anda minimumvalueat,
j
| x =  | m f(x)ineachsubinterval[x |                          | ,x  |          |          |       |     |
| ---- | ------------------------- | ------------------------ | --- | -------- | -------- | ----- | --- |
| say, | j of                      |                          | j−1 | j ]. Let |          |       |     |
|      |                           | f(m )betheminimumvalueof |     |          | f(x)in[x | ,x ], |     |
|      |                           | j                        |     |          |          | j−1 j |     |
|      |                           | f(M )bethemaximumvalueof |     |          | f(x)in[x | ,x ]. |     |
|      |                           | j                        |     |          |          | j−1 j |     |
ThenwedefinetwoparticularRiemannSumsasfollows:

2nd
| MATH1036 |     | SemesterCalculusStudyGuide |     |     | 7   |
| -------- | --- | -------------------------- | --- | --- | --- |
1. LowerSums
f
y
x
|     | x x | x x |     | x   |     |
| --- | --- | --- | --- | --- | --- |
|     | 0 1 | 2 3 | ∆x  | n   |     |
|     | =   |     |     | =   |     |
a
b
Define an inscribed rectangle lying inside the region above the jth subinterval whose height is f(m ).
j
jth
| Theareaofthe inscribedrectangleis |     |        |     |     |     |
| --------------------------------- | --- | ------ | --- | --- | --- |
|                                   |     | = )∆x. |     |     |     |
R f(m
|     |     | j j |     |     |     |
| --- | --- | --- | --- | --- | --- |
ThenthesumoftheareasofallinscribedrectanglesiscalledtheLowerSumandisgivenby
|     |     | (cid:88)n (cid:88)n |          |     |     |
| --- | --- | ------------------- | -------- | --- | --- |
|     |     | L(n) = R =          | f(m )∆x. |     |     |
j j
|     |     | j=1 j=1 |     |     |     |
| --- | --- | ------- | --- | --- | --- |
2. UpperSums
f
y
x
|     | x x | x x |     | x   |     |
| --- | --- | --- | --- | --- | --- |
|     | 0 1 | 2 3 | ∆x  | n   |     |
|     | =   |     |     | =   |     |
a
b
Define a circumscribed rectangle lying above the jth subinterval whose height is f(M ). The area of
j
jth
the circumscribedrectangleis
|     |     | R = f(M )∆x. |     |     |     |
| --- | --- | ------------ | --- | --- | --- |
|     |     | j j          |     |     |     |

2nd
| 8   |     |     | SemesterCalculusStudyGuide |     |     |     |     |     |     | MATH1036 |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | --- | -------- |
ThenthesumoftheareasofallcircumscribedrectanglesiscalledtheUpperSumandisgivenby
|                                                    |     |     |      | (cid:88)n   | (cid:88)n |     |      |     |     |     |
| -------------------------------------------------- | --- | --- | ---- | ----------- | --------- | --- | ---- | --- | --- | --- |
|                                                    |     |     |      | =           | =         |     | )∆x. |     |     |     |
|                                                    |     |     | U(n) |             | R j       | f(M | j    |     |     |     |
|                                                    |     |     |      | j=1         |           | j=1 |      |     |     |     |
| TheLowerandUpperRiemannSumsapproximatetheareaunder |     |     |      |             |           |     | f    |     |     |     |
|                                                    |     |     | L(n) | ≤ Areaunder |           | f ≤ | U(n) |     |     |     |
WorkedExample8.1.1. Approximatetheareaboundedby f(x) = x2 andthe x-axisbetween x = 0and
| =                        |     |     | =   |     |     |     |     |     |     |     |
| ------------------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x 2usingRiemannSumswithn |     |     | 4.  |     |     |     |     |     |     |     |
Theorem8.1. If f isacontinuousfunctionontheinterval[a,b],then lim L(n)and lim U(n)bothexist
|     |     |     |     |     |     |     |     | n→∞ | n→∞ |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
and
|     |          |     | (cid:88)n |        |     | (cid:88)n |        |     |       |     |
| --- | -------- | --- | --------- | ------ | --- | --------- | ------ | --- | ----- | --- |
|     |          | =   |           | f(m)∆x | =   |           | f(M)∆x | =   |       |     |
|     | lim L(n) |     | lim       | i      | lim |           | i      | lim | U(n), |     |
|     | n→∞      |     | n→∞       |        | n→∞ |           |        | n→∞ |       |     |
|     |          |     | i=1       |        |     | i=1       |        |     |       |     |
b−a
| where∆x = |                             |     |     |     |     | ontheith |                |     |                    |     |
| --------- | --------------------------- | --- | --- | --- | --- | -------- | -------------- | --- | ------------------ | --- |
|           | and f(m)istheminimumvalueof | i   |     |     |     | f        | subintervaland |     | f(M)isthemaximum i |     |
n
| valueof f ontheith | subinterval,foreachi |     |     | = 1,2,...,n. |     |     |     |     |     |     |
| ------------------ | -------------------- | --- | --- | ------------ | --- | --- | --- | --- | --- | --- |
TheareaofaregionintheplanemaynowbedefinedintermsofRiemannSums.
Let f be a continuous, nonnegative function on the interval [a,b]. The area of the
regionboundedbythegraphof f,the x-axisandtheverticallines x = aand x = b
is
(cid:88)n
|     |     |      | =   |     | f(x∗)∆x, |       | x∗  |        |     |     |
| --- | --- | ---- | --- | --- | -------- | ----- | --- | ------ | --- | --- |
|     |     | Area |     | lim |          | x i−1 | ≤   | ≤ x, i |     |     |
|     |     |      | n→∞ |     | i        |       | i   |        |     |     |
i=1
b−a
where∆x =
.
n
WorkedExample8.1.2. Findtheareaoftheregionunderthegraphofthegivenfunctioninthegiven
intervalusingRiemannSums.
| 1. f(x) = 16−x2 | in[0,3]. |     |     |     |     |     |     |     |     |     |
| --------------- | -------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| = 1+2x3         |          |     |     |     |     |     |     |     |     |     |
| 2. g(x)         | in[0,5]. |     |     |     |     |     |     |     |     |     |
Tutorial8.1.1.
1. TheLeftRiemannSummeansthatyoutaketheheightoftherectangleoverthei-thinterval[x ,x]
i−1 i
tobe f(x ),thatis,thesamplepointofeachsubintervalisitsleftendpoint. TheRightRiemannSumis
i−1
definedaccordingly. Inparticularcases,theyarethesameasLowerRiemannSumsorUpperRiemann
Sums.
Completethetablebelowbyfillingin‘LowerRiemannSum’or‘UpperRiemannSum’:
|     |     |     | Graphisincreasing |     |     |     |     | Graphisdecreasing |     |     |
| --- | --- | --- | ----------------- | --- | --- | --- | --- | ----------------- | --- | --- |
LeftRiemannSum
RightRiemannSum

2nd
| MATH1036 |     |     | SemesterCalculusStudyGuide |     |     | 9   |
| -------- | --- | --- | -------------------------- | --- | --- | --- |
=
| 2. Findtheapproximateareaunderthecurve |     |     | f(x) sin(x)on[0,π]by: |     |     |     |
| -------------------------------------- | --- | --- | --------------------- | --- | --- | --- |
| (a)FindingtheLowerRiemannSumwhenn      |     |     | = 3.                  |     |     |     |
| (b)FindingtheUpperRiemannSumwhenn      |     |     | = 6.                  |     |     |     |
=
| (c)FindingtheLeftRiemannSumwhenn |     |     | 4.  |     |     |     |
| -------------------------------- | --- | --- | --- | --- | --- | --- |
Justifyyouranswer. Youmayuseanelectronicdevicetoapproximatetheanwersto(a),(b),(c),sayto
3decimalplaces.
|     |     |     | = t4 | = = 1,t | = = 3 | =   |
| --- | --- | --- | ---- | ------- | ----- | --- |
3. ConsidertheRightRiemannSumofg(t) wheret 0 0,t 1 2 1,t 3 andt 4 2.
|     |     |     |     | 2   | 2   |     |
| --- | --- | --- | --- | --- | --- | --- |
(a)Wouldyouexpecttogetanover-estimateoranunder-estimatefortheareaunderthecurve?
(b)CalculatetheRightRiemannSum.
(c) Calculate the Right Riemann Sum again but this time use 6 rectangles of equal width instead of 4.
Whichestimatewouldyouexpecttobemoreaccurate?
= kwhichgoesthroughthepoint(−1,1).
| 4. (a)Findtheequationofthehyperbolaoftheform |     |     | xy  |     |     |     |
| -------------------------------------------- | --- | --- | --- | --- | --- | --- |
(b) Using a Riemann Sum where the height is given by the value of the function at the midpoint of the
baseoftherectangle,approximatetheareaunderthehyperbolagivenin(a)betweenx = −5andx = −1,
dividedinto4rectanglesofequalwidth.
| 8.2 Area | with the | Definite | Integral |     |     |     |
| -------- | -------- | -------- | -------- | --- | --- | --- |
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
skill)
(cid:3)
1. understand and know the proofs of the Fundamental Theorem of Calculus2 (FTC2) and the
(cid:3) MeanVaueTheoremforintegrals,
(cid:3) 2. knowthepropertiesofthedefiniteintegral,
(cid:3) 3. knowhowtoevaluatetheintegralsofsymmetricfunctions,
(cid:3) 4. knowhowtocomputetheaveragevalueofafunction,
(cid:3) 5. computetheareaofaregionbetweentwocurvesusingintegration,
(cid:3) 6. findtheareaofaregionbetweenintersectingcurvesusingintegration,
(cid:3) 7. interpretadefiniteintegralastheareaofaknowngeometricregion,
8. knowhowtosolvetheexaminableworkedoutproblemsfromthissection.
8.2.1 TheDefiniteIntegral
Extending the formula for the area from the previous section to functions which are not necessarily
positiveweobtainthefollowingdefinition:
Definition 8.1 (Definite Integral). Let f be a continuous function defined on the interval [a,b] and
b−a
| dividetheinterval[a,b]intonsubintervalsofequallength∆x |     |     |     | =   |     |     |
| ------------------------------------------------------ | --- | --- | --- | --- | --- | --- |
. Welet
n
|     |     |     | =             | =         |     |     |
| --- | --- | --- | ------------- | --------- | --- | --- |
|     |     | a   | x < x < x < x | < ··· < x | b   |     |
|     |     |     | 0 1 2         | 3 n       |     |     |
be the endpoints of these subintervals and let x∗,x∗,...,x∗ be any sample points in these subintervals
|     |     |     | 1 2 | n   |     |     |
| --- | --- | --- | --- | --- | --- | --- |
x∗
sothat liesintheith subinterval[x ,x]. Thenthedefiniteintegralof f fromatobis
| i   |     |     | i−1 i |     |     |     |
| --- | --- | --- | ----- | --- | --- | --- |
(cid:90)b
(cid:88)n
|     |     |     | f(x)dx = lim | f(x∗)∆x. |     |     |
| --- | --- | --- | ------------ | -------- | --- | --- |
i
n→∞
i=1
a

2nd
| 10  |     |     |     | SemesterCalculusStudyGuide |     |     |     |     |     | MATH1036 |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------- |
ItisclearthenfromRiemannSumsandtheareaunderacurvethatif f iscontinuousandnon-negative
on [a,b] (i.e., f(x) ≥ 0 for all x ∈ [a,b]), then the area bounded by the graph of f, the x-axis and the
| lines x = | aand | x = bis |     |     |     |     |     |     |     |     |
| --------- | ---- | ------- | --- | --- | --- | --- | --- | --- | --- | --- |
(cid:90)b
|     |     |     |     |     | Area | =   | f(x)dx. |     |     |     |
| --- | --- | --- | --- | --- | ---- | --- | ------- | --- | --- | --- |
a
InChapter5ofthefirstsemesterstudyguideweusedtheFundamentalTheoremofCalculus2(FTC2)
in conjunction with some integration techniques to evaluate a definite integral. We now may interpret
thedefiniteintegralastheareaunderthecurveofanon-negativecontinuousfunction. Thefollowingis
aformalproofoftheFundamentalTheoremofCalculus.
Theorem8.2(FundamentalTheoremofCalculus2,FTC2). If f iscontinuousontheclosedinterval
| [a,b]and | F isanantiderivativeof |     |     | f ontheinterval[a,b],then |     |     |     |     |     |     |
| -------- | ---------------------- | --- | --- | ------------------------- | --- | --- | --- | --- | --- | --- |
(cid:90)b
|     |     |     |     |     | f(x)dx | = F(b)−F(a). |     |     |     |     |
| --- | --- | --- | --- | --- | ------ | ------------ | --- | --- | --- | --- |
a
Proof. Partitiontheinterval[a,b]intonsubintervalswithendpoints
|     |     |     |     | =     |         | ···   |           | =     |     |     |
| --- | --- | --- | --- | ----- | ------- | ----- | --------- | ----- | --- | --- |
|     |     |     |     | a x 0 | < x 1 < | x 2 < | < x n−1 < | x n b |     |     |
b−a
| ofequallength∆x |     | =   |     | =   |     |     |     |     |     |     |
| --------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|                 |     | x   | −x  |     | .   |     |     |     |     |     |
|                 |     | i   | i−1 | n   |     |     |     |     |     |     |
Bypairwisesubtractionandadditionofliketerms,wecanwriteasatelescopingseries
|     |     | F(b)−F(a) | =   | )−F(x | )+F(x |     | )−···−F(x | )+F(x | )−F(x |     |
| --- | --- | --------- | --- | ----- | ----- | --- | --------- | ----- | ----- | --- |
|     |     |           |     | F(x n | n−1   |     | n−1       | 1     | 1     | 0 ) |
(cid:88)n
=
|     |     |     |     | [F(x)−F(x |     | i−1 )]. |     |     |     |     |
| --- | --- | --- | --- | --------- | --- | ------- | --- | --- | --- | --- |
i
i=1
SinceFisanantiderivative,Fiscontinuouson[x ,x]anddifferentiableon(x ,x)foreachi. Bythe
|     |     |     |     |     |     | i−1 | i   |     | i−1 | i   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
=
MeanValueTheorem,appliedto F onthesesubintervals,foreachi 1,...,nthereexistc i ∈ (x i−1 ,x) i
suchthat
|     |     |              |     | F(x)−F(x |     | )   |     |     |     |     |
| --- | --- | ------------ | --- | -------- | --- | --- | --- | --- | --- | --- |
|     |     | F(cid:48)(c) | =   | i        | i−1 |     |     |     |     |     |
i
|     |     |     |     | x −x     |     |     |     |     |     |     |
| --- | --- | --- | --- | -------- | --- | --- | --- | --- | --- | --- |
|     |     |     |     | i        | i−1 |     |     |     |     |     |
|     |     |     |     | F(x)−F(x |     | )   |     |     |     |     |
|     |     |     | =   | i        | i−1 |     |     |     |     |     |
∆x
|     |     |           |        | F(x)−F(x  |     | )      |                      |     |                 |        |
| --- | --- | --------- | ------ | --------- | --- | ------ | -------------------- | --- | --------------- | ------ |
|     |     | ⇒         | f(c) = | i         | i−1 | ∵ F    | isanantiderivativeof |     | f, F(cid:48)(c) | = f(c) |
|     |     |           | i      | ∆x        |     |        |                      |     |                 | i i    |
|     |     | ⇒ f(c)∆x  | =      | F(x)−F(x  |     |        |                      |     |                 |        |
|     |     |           | i      | i         | i−1 | )      |                      |     |                 |        |
|     |     | (cid:88)n |        | (cid:88)n |     |        |                      |     |                 |        |
|     |     | f(c)∆x    | =      |           |     | =      |                      |     |                 |        |
|     | ⇒   |           |        | (F(x)−F(x |     | i−1 )) | F(b)−F(a)            |     |                 |        |
|     |     |           | i      |           | i   |        |                      |     |                 |        |
|     |     | i=1       |        | i=1       |     |        |                      |     |                 |        |
(cid:88)n
|     |       | f(c)∆x | =   |           |     |     |     |     |     |     |
| --- | ----- | ------ | --- | --------- | --- | --- | --- | --- | --- | --- |
|     | ⇒ lim |        |     | F(b)−F(a) |     |     |     |     |     |     |
i
n→∞
i=1
(cid:90)b
|     |     | ⇒ f(x)dx | =   | F(b)−F(a). |     | (cid:3) |     |     |     |     |
| --- | --- | -------- | --- | ---------- | --- | ------- | --- | --- | --- | --- |
a

2nd
| MATH1036 |     |     |     | SemesterCalculusStudyGuide |     |     |     |     | 11  |
| -------- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- |
Tutorial8.2.1.
Find the exact area under the curves in Tutorial 8.1.1, parts 2, 3, and 4, by using FTC 2 and compare
withtheapproximationsyouobtainedinTutorial8.1.1.
(cid:80)
The properties of and that of the limit enable us to realise the following properties of the definite
integral. The first property is a definition and is stated separately. The remaining properties require
proofandarestatedinTheorem8.3below.
| Definition8.2. |     | Ifa < band | f iscontinuouson[a,b]thenwedefine |     |     |     |     |     |     |
| -------------- | --- | ---------- | --------------------------------- | --- | --- | --- | --- | --- | --- |
| (cid:90)a      |     | (cid:90)b  |                                   |     |     |     |     |     |     |
=
| 1.  | f(x)dx | − f(x)dx. |     |     |     |     |     |     |     |
| --- | ------ | --------- | --- | --- | --- | --- | --- | --- | --- |
| b   |        | a         |     |     |     |     |     |     |     |
Theorem 8.3 (Further Properties of the Definite Integral). We assume that a ≤ b and that f and g
arecontinuousfunctionson[a,b].
(cid:90)c
| 2. Forc | ∈ [a,b], | f(x)dx | = 0 |     |     |     |     |     |     |
| ------- | -------- | ------ | --- | --- | --- | --- | --- | --- | --- |
c
| Proof.     | Notethat∆x | = 0.       | Sotheresultfollows. |         |     |     |     |     |     |
| ---------- | ---------- | ---------- | ------------------- | ------- | --- | --- | --- | --- | --- |
| (cid:90)b  |            | (cid:90)b  |                     |         |     |     |     |     |     |
| 3. cf(x)dx |            | = c f(x)dx |                     | foranyc | ∈ R |     |     |     |     |
| a          |            | a          |                     |         |     |     |     |     |     |
Proof.
| (cid:90)b |     |           |     |     |          |       |          |  (cid:90)b |     |
| --------- | --- | --------- | --- | --- | --------- | ------ | --------- | ----------- | --- |
|           |     | (cid:88)n |     |     | (cid:88)n |        | (cid:88)n |             |     |
|           |     |           |     |     |     |  |     |       |     |
cf(x)dx = l im cf(x ∗)∆x = l im c f(x ∗)∆x = c l im f(x ∗)∆x = c f(x)dx.
|     |     |       | i   |     |     | i   |       | i   |     |
| --- | --- | ----- | --- | --- | --- | --- | ----- | --- | --- |
|     |     | n → ∞ |     | n   | → ∞ |     | n → ∞ |     |     |
|     |     | i=1   |     |     | i=1 |     | i=1   |     |     |
a a

2nd
| 12               |     |           |         | SemesterCalculusStudyGuide |        |     |     |     |     |     | MATH1036 |
| ---------------- | --- | --------- | ------- | -------------------------- | ------ | --- | --- | --- | --- | --- | -------- |
| (cid:90)b        |     | (cid:90)b |         | (cid:90)b                  |        |     |     |     |     |     |          |
| 4. [f(x)+g(x)]dx |     | =         | f(x)dx+ |                            | g(x)dx |     |     |     |     |     |          |
| a                |     | a         |         |                            | a      |     |     |     |     |     |          |
Proof.
(cid:90)b
(cid:88)n
|     |     | [f(x)+g(x)]dx |     |     | = lim |     | [f(x∗)+g(x∗)]∆x |     |     |     |     |
| --- | --- | ------------- | --- | --- | ----- | --- | --------------- | --- | --- | --- | --- |
|     |     |               |     |     |       |     | i               | i   |     |     |     |
n→∞
i=1
a
|                  |     |           |         |           |           |                 |           |           |           |       |     |
| ---------------- | --- | --------- | ------- | --------- | --------- | ---------------- | --------- | --------- | --------- | ------ | --- |
|                  |     |           |         |           |           |  (cid:88)n |           | (cid:88)n |           |  |     |
|                  |     |           |         |           | =         |                  | ∗)∆x+     |           | ∗)∆x      |        |     |
|                  |     |           |         |           | l         | im               | f(x       |           | g(x       |        |     |
|                  |     |           |         |           |           |                  | i         |           | i         |        |     |
|                  |     |           |         |           | n         | → ∞              |           |           |           |        |     |
|                  |     |           |         |           |           | i=1              |           | i=1       |           |        |     |
|                  |     |           |         |           |           | (cid:88)n        |           |           | (cid:88)n |        |     |
|                  |     |           |         |           |           |                  | f(x∗)∆x+  |           | g(x∗)∆x   |        |     |
|                  |     |           |         |           | = lim     |                  |           | lim       |           |        |     |
|                  |     |           |         |           |           |                  | i         |           |           | i      |     |
|                  |     |           |         |           | n→∞       |                  |           | n→∞       |           |        |     |
|                  |     |           |         |           |           | i=1              |           |           | i=1       |        |     |
|                  |     |           |         |           | (cid:90)b |                  | (cid:90)b |           |           |        |     |
|                  |     |           |         |           | =         | f(x)dx+          |           | g(x)dx.   |           |        |     |
|                  |     |           |         |           | a         |                  | a         |           |           |        |     |
| (cid:90)b        |     | (cid:90)b |         | (cid:90)b |           |                  |           |           |           |        |     |
| 5. [f(x)−g(x)]dx |     | =         | f(x)dx− |           | g(x)dx    |                  |           |           |           |        |     |
| a                |     | a         |         |           | a         |                  |           |           |           |        |     |
Proof.
|           | (cid:90)b     |     |           | (cid:90)b |         | (cid:90)b |     | (cid:90)b |         | (cid:90)b |     |
| --------- | ------------- | --- | --------- | --------- | ------- | --------- | --- | --------- | ------- | --------- | --- |
|           | [f(x)−g(x)]dx |     |           | =         | f(x)dx+ | [−g(x)]dx |     | =         | f(x)dx− | g(x)dx.   |     |
|           | a             |     |           | a         |         | a         |     | a         |         | a         |     |
| (cid:90)b | (cid:90)c     |     | (cid:90)b |           |         |           |     |           |         |           |     |
6. f(x)dx = f(x)dx+ f(x)dx if f iscontinuousonanintervalcontaininga,bandc
| a   | a   |     | c   |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Proof. Weassumethata < c < bandchooseapartitionof[a,b]thatincludescasapointofsubdivision,
| sayc = x | . Then |     |     |     |     |     |     |     |     |     |     |
| -------- | ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
m
(cid:90)b
(cid:88)n
|     |     |     | f(x)dx | =   | lim | f(x∗)∆x |     |     |     |     |     |
| --- | --- | --- | ------ | --- | --- | ------- | --- | --- | --- | --- | --- |
|     |     |     |        |     |     | i       | i   |     |     |     |     |
n→∞
i=1
a
|     |     |     |     |           |                 |           |         |           |         |       |     |
| --- | --- | --- | --- | --------- | ---------------- | --------- | ------- | --------- | ------- | ------ | --- |
|     |     |     |     |           |  (cid:88)m |           |         | (cid:88)n |         |  |     |
|     |     |     |     | =         |                  | ∗)∆x      | +       |           | ∗)∆x    |        |     |
|     |     |     |     |           | l im             | f(x       |         | f(x       |         |        |     |
|     |     |     |     |           |                  | i         | i       |           | i       | i      |     |
|     |     |     |     | n         | → ∞              |           |         |           |         |        |     |
|     |     |     |     |           | i=1              |           | i=m+1   |           |         |        |     |
|     |     |     |     |           | (cid:88)m        |           |         | (cid:88)n |         |        |     |
|     |     |     |     | =         | lim              | f(x∗)∆x   | + lim   |           | f(x∗)∆x |        |     |
|     |     |     |     |           |                  | i         | i       |           | i       | i      |     |
|     |     |     |     | n→∞       |                  |           | n→∞     |           |         |        |     |
|     |     |     |     |           | i=1              |           |         | i=m+1     |         |        |     |
|     |     |     |     | (cid:90)c |                  | (cid:90)b |         |           |         |        |     |
|     |     |     |     | =         | f(x)dx+          |           | f(x)dx. |           |         |        |     |
|     |     |     |     |           | a                |           | c       |           |         |        |     |
=
Note that because of x c for some m, in general, the subintervals cannot be chosen to be of equal
m
length.

2nd
| MATH1036 |     |     |     | SemesterCalculusStudyGuide |     |     |     |     | 13  |
| -------- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- |
(cid:90)b
7. Ifm ≤ f(x) ≤ M foralla ≤ x ≤ b,thenm(b−a) ≤ f(x)dx ≤ M(b−a)
a
| Proof. | Since f(x∗) | ≤ M foreachchoiceof |         | x∗    | and∆x | ≥ 0,wehave |     |     |     |
| ------ | ----------- | ------------------- | ------- | ----- | ----- | ---------- | --- | --- | --- |
|        | i           |                     |         |       | i     |            |     |     |     |
|        |             |                     | f(x∗)∆x | ≤ M∆x |       |            |     |     |     |
i
|     |     | (cid:88)n |         | (cid:88)n |     | (cid:88)n |     | (cid:34) (cid:32) (cid:33)(cid:35) |     |
| --- | --- | --------- | ------- | --------- | --- | --------- | --- | ---------------------------------- | --- |
|     |     |           |         |           |     |           | b−a | b−a                                |     |
|     |     | ⇒         | f(x∗)∆x | ≤         | M∆x | =         | =   |                                    |     |
|     |     |           |         |           |     | M         |     | M n                                |     |
|     |     |           | i       |           |     |           | n   | n                                  |     |
|     |     | i=1       |         | i=1       |     | i=1       |     |                                    |     |
(cid:88)n
f(x∗)∆x
|     |     | ⇒   |     | ≤ M(b−a) |     |     |     |     |     |
| --- | --- | --- | --- | -------- | --- | --- | --- | --- | --- |
i
i=1
(cid:88)n
f(x∗)∆x
|     |     | ⇒ lim |     | ≤ M(b−a) |     |     |     |     |     |
| --- | --- | ----- | --- | -------- | --- | --- | --- | --- | --- |
i
n→∞
i=1
(cid:90)b
|     |     | ⇒   | f(x)dx | ≤ M(b−a). |     |     |     |     |     |
| --- | --- | --- | ------ | --------- | --- | --- | --- | --- | --- |
a
(cid:90)b
|     |     |     | f(x∗)foreachchoiceof |     |     | x∗  |     |     |     |
| --- | --- | --- | -------------------- | --- | --- | --- | --- | --- | --- |
Similary,usingthefactthatm ≤ wegetm(b−a) ≤ f(x)dxandtheresult
|     |     |     | i   |     |     | i   |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
a
thenfollows.
(cid:90)b
|            | ≥        | ≤ ≤ |        |        | ≥   |     |     |     |     |
| ---------- | -------- | --- | ------ | ------ | --- | --- | --- | --- | --- |
| 8. If f(x) | 0foralla | x   | b,then | f(x)dx | 0   |     |     |     |     |
a
| Proof.     | Putm = 0inProperty7. |     |          |           |     |           |     |     |     |
| ---------- | -------------------- | --- | -------- | --------- | --- | --------- | --- | --- | --- |
|            |                      |     |          | (cid:90)b |     | (cid:90)b |     |     |     |
| 9. If f(x) | ≥ g(x)foralla        | ≤ x | ≤ b,then | f(x)dx    |     | ≥ g(x)dx  |     |     |     |
|            |                      |     |          | a         |     | a         |     |     |     |
Proof. Since f(x) ≥ g(x)foreacha ≤ x ≤ b, f(x)−g(x) ≥ 0in[a,b]. Thus,byProperty8,
|                            |                   | (cid:90)b     |     |     | (cid:90)b |         | (cid:90)b |     |     |
| -------------------------- | ----------------- | ------------- | --- | --- | --------- | ------- | --------- | --- | --- |
|                            |                   | [f(x)−g(x)]dx |     | ≥   | 0 ⇒       | f(x)dx− | g(x)dx    | ≥ 0 |     |
|                            |                   | a             |     |     | a         |         | a         |     |     |
|                            |                   |               |     |     | (cid:90)b |         | (cid:90)b |     |     |
|                            |                   |               |     |     | ⇒         | f(x)dx  | ≥ g(x)dx. |     |     |
|                            |                   |               |     |     | a         |         | a         |     |     |
| (cid:12)                   | (cid:12)          |               |     |     |           |         |           |     |     |
| (cid:12) (cid:12)(cid:90)b | (cid:12) (cid:12) | (cid:90)b     |     |     |           |         |           |     |     |
| (cid:12)                   | (cid:12)          |               |     |     |           |         |           |     |     |
| (cid:12)                   | f(x)dx(cid:12)    |               |     |     |           |         |           |     |     |
| 10. (cid:12)               | (cid:12) ≤        | |f(x)|dx      |     |     |           |         |           |     |     |
| (cid:12)                   | (cid:12)          |               |     |     |           |         |           |     |     |
| (cid:12)                   | (cid:12)          |               |     |     |           |         |           |     |     |
| (cid:12)a                  | (cid:12)          | a             |     |     |           |         |           |     |     |

14 2nd SemesterCalculusStudyGuide MATH1036
Proof. Since f(x) ≤ |f(x)|and−f(x) ≤ |f(x)|foreacha ≤ x ≤ b,
(cid:90)b (cid:90)b (cid:90)b (cid:90)b
f(x)dx ≤ |f(x)|dx and − f(x)dx ≤ |f(x)|dx
a a a a
(cid:12) (cid:12)
(cid:12) (cid:12)(cid:90)b (cid:12) (cid:12) (cid:90)b
(cid:12) (cid:12)
⇒ (cid:12) (cid:12) f(x)dx(cid:12) (cid:12) ≤ |f(x)|dx. (cid:3)
(cid:12) (cid:12)
(cid:12) (cid:12)
(cid:12)a (cid:12) a
We will now use the FTC2 and the techniques of Chapter 5 (Integral Table, Substitution Rule and
Integration by Parts) in the 1st Semester Calculus Study Guide to evaluate definite integrals. For the
nexttheoremwerecallevenandoddfunctionsfromAlgebra1st semester.
f(x)isanEVENfunction⇔ f(−x) = f(x)forall x ∈ Dom(f)
f(x)isanODDfunction⇔ f(−x) = −f(x)forall x ∈ Dom(f)
Theorem8.4(IntegrationofEvenandOddfuntions). Supposethat f iscontinouson[−a,a].
1. If f isanevenfunction,then
(cid:90)a (cid:90)a
f(x)dx = 2 f(x)dx.
−a 0
2. If f isanoddfunction,then
(cid:90)a
f(x)dx = 0.
−a
Proof. Usingthepropertiesofthedefiniteintegralwehave
(cid:90)a (cid:90)0 (cid:90)a
f(x)dx = f(x)dx+ f(x)dx
−a −a 0
(cid:90)−a (cid:90)a
= − f(x)dx+ f(x)dx.
0 0
We apply the Definite Integral Substitution Rule. Put u = −x. Then du = −dx. The limits of the first
integralchangeasfollows: when x = −a,u = aandwhen x = 0,u = 0. Thus
(cid:90)a (cid:90)a (cid:90)a (cid:90)a (cid:90)a
f(x)dx = − f(−u)(−du)+ f(x)dx = f(−x)dx+ f(x)dx.
−a 0 0 0 0
1. Supposethat f isanevenfunction. Then
(cid:90)a (cid:90)a (cid:90)a (cid:90)a (cid:90)a (cid:90)a
f(x)dx = f(−x)dx+ f(x)dx = f(x)dx+ f(x)dx = 2 f(x)dx.
−a 0 0 0 0 0

2nd
| MATH1036 |     |     |     | SemesterCalculusStudyGuide |     |     |     |     |     | 15  |
| -------- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | --- |
2. If f isanoddfunction,then
|                     | (cid:90)a | (cid:90)a                              |          | (cid:90)a |        | (cid:90)a |         | (cid:90)a |           |     |
| ------------------- | --------- | -------------------------------------- | -------- | --------- | ------ | --------- | ------- | --------- | --------- | --- |
|                     |           | =                                      | f(−x)dx+ |           |        | =         | f(x)dx+ |           | = (cid:3) |     |
|                     | f(x)dx    |                                        |          |           | f(x)dx | −         |         | f(x)dx    | 0.        |     |
|                     | −a        | 0                                      |          | 0         |        | 0         |         | 0         |           |     |
| WorkedExample8.2.1. |           | Evaluatethefollowingdefiniteintegrals. |          |           |        |           |         |           |           |     |
1.
(cid:90)π
(sinx−xcosx)3dx
−π
2.
(cid:90)2
x2coshxdx
−2
We know that the area of the region under a curve is greater or equal than the area of the inscribed
rectangles(lowersums)andlessorequalthantheareaofthecircumscribedrectangles(uppersums). We
now have the Mean Value Theorem for integral calculus which loosely states that somewhere between
=
the inscribed and circumscribed rectangles for n 1, there is a rectangle whose area is precisely equal
totheregionunderthecurve.
Theorem 8.5 (Mean Value Theorem for Integrals). If f is continuous on the closed interval [a,b],
thenthereexistsanumbercintheclosedinterval[a,b]suchthat
(cid:90)b
|     |     |     |     | f(x)dx | =   | f(c)(b−a). |     |     |     |     |
| --- | --- | --- | --- | ------ | --- | ---------- | --- | --- | --- | --- |
a
Proof. By the Extreme Value Theorem, Theorem 6.2, f attains its minimum and maximum on [a,b].
| Hencetherearey,z |     | ∈ [a,b]suchthat |      |      |            |     |          |     |     |     |
| ---------------- | --- | --------------- | ---- | ---- | ---------- | --- | -------- | --- | --- | --- |
|                  |     |                 |      | ≤    | ≤          |     | ∈        |     |     |     |
|                  |     |                 | f(y) | f(x) | f(z)forall |     | x [a,b]. |     |     |     |
Since f iscontinuous,alsothefunctionggivenby
=
|     |     |     |     | g(x) | f(x)(b−a) |     |     |     |     |     |
| --- | --- | --- | --- | ---- | --------- | --- | --- | --- | --- | --- |
iscontinuouson[a,b].
InviewofTheorem8.3,(7),
(cid:90)b
|     |     |     | =    | f(y)(b−a) | ≤   |        | ≤ f(z)(b−a). |     |     |     |
| --- | --- | --- | ---- | --------- | --- | ------ | ------------ | --- | --- | --- |
|     |     |     | g(y) |           |     | f(x)dx |              |     |     |     |
a
(cid:90)b
=
With k f(x)dx, it follows from the Intermediate Value Theorem, Theorem 2.4, that there is c
a
=
| betweenyandzsuchthatg(c) |     |     | k. Inparticular,c |     | ∈   | [a,b]. | Hence |     |     |     |
| ------------------------ | --- | --- | ----------------- | --- | --- | ------ | ----- | --- | --- | --- |
(cid:90)b
|     |     |     | f(x)dx | = k | = g(c) = | f(c)(b−a). |     | (cid:3) |     |     |
| --- | --- | --- | ------ | --- | -------- | ---------- | --- | ------- | --- | --- |
a

2nd
| 16  |     |     |     | SemesterCalculusStudyGuide |     |     |     | MATH1036 |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | -------- |
The value of f(c) given by the Mean Value Theorem for Integrals is called the average value of f on
| [a,b]denotedby | f   | andgivenby |     |     |     |     |     |     |
| -------------- | --- | ---------- | --- | --- | --- | --- | --- | --- |
ave
(cid:90)b
1
=
|     |     |     |     |     | f       | f(x)dx. |     |     |
| --- | --- | --- | --- | --- | ------- | ------- | --- | --- |
|     |     |     |     |     | ave b−a |         |     |     |
a
WorkedExample8.2.2. Findtheaveragevalueof f(x) = 3x2−2xon[1,4].
Solution.
(cid:90)4
|     |     | 1   |            |     | 1 (cid:104) | (cid:105)4 1  |     |     |
| --- | --- | --- | ---------- | --- | ----------- | ------------- | --- | --- |
|     |     | =   | (3x2−2x)dx |     | = x3−x2     | =             | =   |     |
|     | f   |     |            |     |             | [64−16−(1−1)] | 16. |     |
|     | ave | 4−1 |            |     | 3           | 1 3           |     |     |
1
| Tutorial8.2.2. | 1. [C1]§5.2,pp. |     |     | 544–546: | 61,62,88–90,93,110,114. |     |     |     |
| -------------- | --------------- | --- | --- | -------- | ----------------------- | --- | --- | --- |
2. Giventhata ≤ bandgisanoddorevencontinuousfunctionon[a,b],usethepropertiesofDefinite
Integralstoshowthat
|     |     |     | (cid:12) (cid:12)(cid:90)b |     | (cid:12) (cid:90)−a | (cid:90)a |     |     |
| --- | --- | --- | -------------------------- | --- | ------------------- | --------- | --- | --- |
(cid:12)
|     |     |     | (cid:12)   |        | (cid:12)              |           |     |     |
| --- | --- | --- | ---------- | ------ | --------------------- | --------- | --- | --- |
|     |     |     | − (cid:12) | g(w)dw | (cid:12) ≥ |g(w)|dw+2 | |g(w)|dw. |     |     |
|     |     |     | (cid:12)   |        | (cid:12)              |           |     |     |
|     |     |     | (cid:12)   |        | (cid:12)              |           |     |     |
|     |     |     | a          |        | b                     | 0         |     |     |
8.2.2 InterpretingtheDefiniteIntegralasaKnownArea
(cid:90)b
The definite integral f(x)dx for f(x) ≥ 0 in [a,b] gives the area under f. If the region has a known
a
geometry,thenthedefiniteintegraliseasilycalculatedusingtheknowngeometricareaformula.
WorkedExample8.2.3. Evaluatethefollowingdefiniteintegralsbyinterpretingthemintermsofareas.
(cid:90)2
(cid:112)
1. 4−x2dx.
−2
(cid:90)2
2. |2x−1|dx.
0
| Tutorial8.2.3.              | [C1]§5.2,pp. |     | 544–545: |     | 71,72,78,83. |           |     |       |
| --------------------------- | ------------ | --- | -------- | --- | ------------ | --------- | --- | ----- |
| 8.2.3 AreabetweentwoCurves: |              |     |          |     | x-axis       |           |     |       |
|                             |              |     |          |     |              | f(x) g(x) |     | x = a |
We consider the region between the continuous curves and and the vertical lines and
| x = bwith | f(x) ≥ g(x)foreach |     | x   | ∈ [a,b]. |     |     |     |     |
| --------- | ------------------ | --- | --- | -------- | --- | --- | --- | --- |

MATH1036 2nd SemesterCalculusStudyGuide 17
y
f
g
x
a
x∗ b
i
∆x
UsingRiemannSums,wepartition[a,b]intonsubintervalsofequallength∆x. Thenfortheith subin-
terval[x ,x],theith verticalrectangularstriphasarea
i−1 i
R = [f(x∗)−g(x∗)]∆x
i i i
with x∗ any sample point in [x ,x]. Hence the area between the two curves is the limit as n → ∞ of
i i−1 i
thesumofalltheserectangularstrips(RiemannSum)sothat
(cid:88)n
Area = lim R
i
n→∞
i=1
(cid:88)n
= lim [f(x∗)−g(x∗)]∆x
n→∞ i i
i=1
(cid:90)b
= [f(x)−g(x)]dx.
a
It is easy to remember that if f is the curve on the TOP and g is the BOTTOM curve then the area
between f andgis
(cid:90)b
Area = [TOP−BOTTOM]dx.
a
π
WorkedExample8.2.4. Findtheareaoftheregionboundedbyy = sec2x,y = sinx, x = 0and x = .
4
Ifthelines x = aandy = barenotgivenbutthecurves f andgintersectinatleasttwopoints,i.e.,there
area < bsuchthat f(a) = g(a)and f(b) = g(b),thenwefirsthavetofindthesepointsaandbinorder
tofindtheareaboundedbythetwocurves.
WorkedExample8.2.5. 1. Findtheareaoftheregionboundedbyy = x2+2x+1andy = 2x+5.
2. Findtheareaoftheregionboundedbyy = 5lnxandy = xlnx.
3. (Bounded region with changing formula) Find the area of the region in the first quadrant bounded
√
abovebyy = xandbelowbythe x-axisandtheliney = x−2.
Tutorial8.2.4. [C1]§6.1,pp. 633–634: 1,2,7,8,10,14.

2nd
| 18                          |     | SemesterCalculusStudyGuide |     |     | MATH1036 |
| --------------------------- | --- | -------------------------- | --- | --- | -------- |
| 8.2.4 AreabetweentwoCurves: |     | y-axis                     |     |     |          |
= =
We consider the region between the continuous curves x f(y) and x g(y) and the horizontal lines
| =       | =                                           |     |          |     |     |
| ------- | ------------------------------------------- | --- | -------- | --- | --- |
| y aandy | bwith f(y)furthertotherightthang(y)foreachy |     | ∈ [a,b]. |     |     |
y
g f
b
∆y
y∗
i
a
x
|                   | wepartition[a,b]intonsubintervalsofequallength∆y. |     |     | Thenfortheith |        |
| ----------------- | ------------------------------------------------- | --- | --- | ------------- | ------ |
| UsingRiemannSums, |                                                   |     |     |               | subin- |
| terval[y          | ,y]theith horizontalrectangularstriphasarea       |     |     |               |        |
| i−1               | i                                                 |     |     |               |        |
= [f(y∗)−g(y∗)]∆y
R i
i i
with y∗ any sample point in [y ,y]. Hence the area between the two curves is the limit as n → ∞ of
| i   |     | i−1 i |     |     |     |
| --- | --- | ----- | --- | --- | --- |
thesumofalltheserectangularstrips(RiemannSum)sothat
(cid:88)n
=
Area lim R i
n→∞
i=1
(cid:88)n
= [f(y∗)−g(y∗)]∆y
lim
n→∞ i i
i=1
(cid:90)b
= [f(y)−g(y)]dy.
a
It is easy to remember that if f is the curve on the RIGHT and g is the LEFT curve then the area
| between f | andgis |     |     |     |     |
| --------- | ------ | --- | --- | --- | --- |
(cid:90)b
=
Area [RIGHT−LEFT]dy.
a
WorkedExample8.2.6. 1. Findtheareaoftheregionboundedby x = 3−y2 and x = y+1.
2. Setuptheintegralwithrespecttoyfortheareaoftheregionboundedby x = 2y,y+6 = 2xandthe
x-axis. Thensetuptheintegral,forthesameregion,butwithrespectto x. Donotevaluatethearea.
| Tutorial8.2.5. | [C1]§6.1,pp. | 633–635: 5,6,22,30,36,53,54. |     |     |     |
| -------------- | ------------ | ---------------------------- | --- | --- | --- |
8.2.5 AreawithCrossingoverFunctions
= =
In order to find the area bounded by curves y f(x) and y g(x) which intersect at finitely many
|     | [a,b] |     | [a,b] | f(x) ≥ | g(x) g(x) ≥ |
| --- | ----- | --- | ----- | ------ | ----------- |
points in an interval we have to distinguish the regions in where and

2nd
| MATH1036 |     | SemesterCalculusStudyGuide |     |     |     | 19  |
| -------- | --- | -------------------------- | --- | --- | --- | --- |
=
f(x). Thus we first find the points of intersection of f and g (equate f(x) g(x) and solve for
x ∈ [a,b]) which will produce finitely many points x ,x ,...,x , say, generating the subintervals
|     |     |     | 1 2 | n   |     |     |
| --- | --- | --- | --- | --- | --- | --- |
[a,x ],[x ,x ],[x ,x ],...,[x ,b]. Wethenhaveregionscorrespondingtothesesubintervalswitharea
| 1 1 | 2 2 3 | n   |     |     |     |     |
| --- | ----- | --- | --- | --- | --- | --- |
A inwhichwecanidentifytheTOPandBOTTOMgraphs. Thentheareaoftherequiredregionis
i
= +A +···+A
|     |     | A A | n+1 | .   |     |     |
| --- | --- | --- | --- | --- | --- | --- |
1 2
Since

|     |     |  f(x)−g(x) |         | ≥    |     |     |
| --- | --- | -------------- | ------- | ---- | --- | --- |
|     |     |                | if f(x) | g(x) |     |     |
|f(x)−g(x)| =
g(x)−
|                |                 |     | f(x) ifg(x) | ≥ f(x) |     |     |
| -------------- | --------------- | --- | ----------- | ------ | --- | --- |
| theareabetween | f andgin[a,b]is |     |             |        |     |     |
(cid:90)b
A = |f(x)−g(x)|dx.
a
Wedonotexplicitlyusetheaboveformula,butrathersplittheregion[a,b]intosubintervalswherewe
canidentifywhichgraphisonTOPandwhichisontheBOTTOM.
WorkedExample8.2.7.
|                                              |     |     | = x2 | = 2−x2 | ≤ ≤  |     |
| -------------------------------------------- | --- | --- | ---- | ------ | ---- | --- |
| 1. Findtheareaoftheregionboundedbythegraphsy |     |     | andy | for0   | x 2. |     |
2. Findtheareaoftheregionboundedbythegraphsy = sinxandy = cosxin[0,2π].
| Tutorial8.2.6. | [C1]§6.1,pp.  | 633–634: 3,4,16,17,20,25,37. |     |     |     |     |
| -------------- | ------------- | ---------------------------- | --- | --- | --- | --- |
| 8.3 Solids     | of Revolution |                              |     |     |     |     |
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
skill)
(cid:3)
1. understandandbeabletousetheDiskMethodincomputingthevolumeofasolidofrevolution
aboutthecoordinateaxesandaboutlinesofrotation.
(cid:3)
2. understand and be able to use the Washer Method in computing the volume of a solid of revo-
lutionaboutthecoordinateaxesandaboutlinesofrotation.
(cid:3)
3. knowhowtosolvetheexaminableworkedoutproblemsfromthissection.
If a region in the plane is revolved about a line, the resulting solid is called a solid of revolution, and
the line is called the axis of revolution. The volume of the object which is “cut out” of 3-dimensional
spacebyrevolvingtheregionaboutalineisthevolumeofthesolidofrevolution.
8.3.1 TheDiskMethod
| Rotationaboutthe | x-axis |     |     |     |     |     |
| ---------------- | ------ | --- | --- | --- | --- | --- |
x-axis.
Considerthesolidofrevolutionformedbyrevolvingtheplaneregionbelowaboutthe

2nd
| 20  |     |     |      | SemesterCalculusStudyGuide |     |     |      | MATH1036 |
| --- | --- | --- | ---- | -------------------------- | --- | --- | ---- | -------- |
| y   |     |     | f(x) |                            | y   |     | f(x) |          |
x x
|     | a   |     | x   | b   | a   |     | x   | b   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
TofindthevolumeofthissolidofrevolutionwiththeDiskMethodweapproximatetheregionbounded
bythecurvey = f(x),thexaxisandthelinesx = aandx = bbyrectangles. Weconsiderarepresentative
rectangle in the plane region. Spinning this rectangle once around the x-axis produces a representative
discdepictedbelow.
∆x
disc
f(x∗)
i
|     |     |     |     | x   |     |     | x   |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
x∗
i rotate
|     |     |     | f(x∗)aboutthe |     |     |     | f(x∗). |     |
| --- | --- | --- | ------------- | --- | --- | --- | ------ | --- |
Rotatingthelinewithlength x-axisresultsinacirclewithradius Theareaofthis
|     |     |     | i   |     |     |     | i   |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
circleis A(x∗) = π[f(x∗)]2. Therefore,thevolumeoftherepresentativediscis
|     | i   | i   |     |             |              |     |     |     |
| --- | --- | --- | --- | ----------- | ------------ | --- | --- | --- |
|     |     |     |     | = A(x∗)∆x = | π[f(x∗)]2∆x. |     |     |     |
V
|     |     |     |     | i i | i   |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
WemaythenapproximatethevolumeV ofthesolidbynsuchdiscsofequalwidth∆xandradius f(x∗)
i
sothat
|     |     |     |     | (cid:88)n (cid:88)n |     |     |     |     |
| --- | --- | --- | --- | ------------------- | --- | --- | --- | --- |
π[f(x∗)]2∆x.
|     |     |     |     | V ≈ V = |     |     |     |     |
| --- | --- | --- | --- | ------- | --- | --- | --- | --- |
i i
|     |     |     |     | i=1 i=1 |     |     |     |     |
| --- | --- | --- | --- | ------- | --- | --- | --- | --- |
Bylettingn → ∞wethenhavethevolumeofthesolidofrevolution(bythediskmethod)as
(cid:90)b
|     |     |     | (cid:88)n       |         | (cid:88)n  |     |            |     |
| --- | --- | --- | --------------- | ------- | ---------- | --- | ---------- | --- |
|     |     | V = | lim π[f(x∗)]2∆x | = π lim | [f(x∗)]2∆x | = π | [f(x)]2dx. |     |
|     |     |     |                 | i       | i          |     |            |     |
|     |     | n→∞ |                 | n→∞     |            |     |            |     |
|     |     |     | i=1             |         | i=1        |     |            |     |
a

MATH1036 2nd SemesterCalculusStudyGuide 21
Hence
(cid:90)b
V = π [f(x)]2dx.
a
Wemayreplace f(x)byR(x)where(forconvenience)R(x)istheradiusofthedisk. Thus
(cid:90)b
V = π [R(x)]2dx.
a
The circle generated by rotating the line with length f(x) about the x-axis is also obtained by taking
the cross-section of the solid with the plane x = constant, which we call the cross-section of the solid
at x. Sincetheareaofthiscross-sectionisπ[f(x)]2,theaboveformulaforthevolumeV ofthesolidof
revolutioncaninformallybewrittenas
(cid:90)b
V = [areaofthecross-sectionofthesolidat x]dx.
a
WorkedExample8.3.1.
rx
1. (Volume of a cone) The region bounded by the graph of f(x) = , 0 ≤ x ≤ h is revolved about the
h
x-axis. Findthevolumeoftheresultingsolid.
Thefollowingsketchisforillustrationonly;itisnotneededtodothecalculations.
y y
rx
f(x) =
h
x x
h h

22 2nd SemesterCalculusStudyGuide MATH1036
√
2. (Volume of a sphere) The region bounded by the graph of f(x) = r2−x2, −r ≤ x ≤ r, is revolved
aboutthe x-axis. Findthevolumeoftheresultingsolid.
Thefollowingsketchisforillustrationonly;itisnotneededtodothecalculations.
y y
r r
x x
−r r −r r
−r
3. Avuvuzelaisconstructedbyrevolvingtheregionboundedbythecurvey = e−x between x = 0and
x = 1aboutthe x-axis. Findthevolumeofthevuvuzela.
Thefollowingsketchisforillustrationonly;itisnotneededtodothecalculations.
y
y
y = e−x
x x
1

2nd
| MATH1036 |     |     | SemesterCalculusStudyGuide |     |     | 23  |
| -------- | --- | --- | -------------------------- | --- | --- | --- |
4. (Rotationaboutalineparalleltothe x-axis)Findthevolumeofthesolidgeneratedbyrevolvingthe
√
| regionboundedbyy |     | = x, x = 1and | x = 4abouttheliney | = 1. |     |     |
| ---------------- | --- | ------------- | ------------------ | ---- | --- | --- |
| y                |     |               |                    | y    |     |     |
√
|     | y   | = x |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| 1   |     |     | 1   |     |     |     |
|     |     |     | x   |     |     | x   |
|     | 1   | 4   |     | 1   | 4   |     |
Rotationaboutthey-axis
To find the volume of the solid generated by revolving the region between the y-axis and a curve
=
| x f(y),a | ≤ y ≤ b,aboutthey-axisweuse |     |     |     |     |     |
| -------- | --------------------------- | --- | --- | --- | --- | --- |
(cid:90)b
= [f(y)]2dy
V π
a
ortakingR(y)astheradiusofthediskatywemaywrite
(cid:90)b
= [R(y)]2dy.
V π
a
Again,wemaymemorizethisas
(cid:90)b
=
V [areaofthecross-sectionofthesolidaty]dy.
a
WorkedExample8.3.2. 1. Findthevolumeofthesolidgeneratedbyrevolvingtheregionboundedby
| x = 6y−y2 | andthey-axisaboutthey-axis. |     |     |     |     |     |
| --------- | --------------------------- | --- | --- | --- | --- | --- |
2. Findthevolumeofaspherewithradiusrbyrotatingaregionaboutthey-axis. (Seeprevioussection).
| Tutorial8.3.1. | [C1]§6.2,p. | 653: | 75,76,84,87. |     |     |     |
| -------------- | ----------- | ---- | ------------ | --- | --- | --- |
8.3.2 TheWasherMethod
| Rotationaboutthe |     | x-axis |     |     |     |     |
| ---------------- | --- | ------ | --- | --- | --- | --- |
= =
Consider a region bounded by the graphs of x a, x b and two continuous functions f and g with
| f(x) ≥ g(x) | ≥   | x ∈ [a,b]. |     |     |     |     |
| ----------- | --- | ---------- | --- | --- | --- | --- |
0forall

2nd
| 24  |     | SemesterCalculusStudyGuide |     | MATH1036 |
| --- | --- | -------------------------- | --- | -------- |
y
f(x)
g(x)
x
|     |     | a   | b   |     |
| --- | --- | --- | --- | --- |
Revolvingthisregionaboutthe x-axisproducesasolidofrevolutionwithaholethroughthesolid.
y
x
a
b
The volume V of this solid may be obtained by subtracting the volume of the solid generated by the
smallerregionfromthevolumeofthesolidgeneratedbythelargerregion(subtractionoftwodisks)to
give
|     | (cid:90)b     | (cid:90)b | (cid:90)b         |           |
| --- | ------------- | --------- | ----------------- | --------- |
|     |               |           | (cid:110)         | (cid:111) |
|     | = [f(x)]2dx−π | [g(x)]2dx | = [f(x)]2−[g(x)]2 |           |
|     | V π           |           | π                 | dx.       |
|     | a             | a         | a                 |           |
Note that the cross-section at x is a washer with inner radius g(x) and outer radius f(x). Denoting the
innerradiusbyr(x)andtheouterradiusbyR(x),wemayalsowrite
(cid:90)b
|     |     | (cid:110) | (cid:111) |     |
| --- | --- | --------- | --------- | --- |
= [R(x)]2−[r(x)]2
|     |     | V π | dx. |     |
| --- | --- | --- | --- | --- |
a
Notingthattheareaofthecross-sectionwasherat xisπ[f(x)]2−π[g(x)]2,wemayagainwrite
(cid:90)b
|     | V = [areaofthecross-sectionofthesolidat |     | x]dx. |     |
| --- | --------------------------------------- | --- | ----- | --- |
a
= x2 +1 = +3
Worked Example 8.3.3. 1. The region bounded by the curve y and the line y −x is
x-axistogenerateasolid.
| revolvedaboutthe |     | Findthevolumeofthesolid. |     |     |
| ---------------- | --- | ------------------------ | --- | --- |

MATH1036 2nd SemesterCalculusStudyGuide 25
y
x2+1
−x+3
x
−2 1
2. (Rotationaboutalineparalleltothex-axis)Theregionboundedbythegraphsy = x2+2,2y−x−2 = 0,
x = 0and x = 1isrevolvedabouttheliney = 3. Findthevolumeofthesolidgenerated.
y
y = x2+2
y = 3
2y−x−2 = 0
x
1
Rotationaboutthey-axis
Byinterchangingtherolesofxandywecanapplytheabovetechniquestosolidsgeneratedbyrevolving
regionsaboutthey-axisusingthewashermethod. Thereforethevolumeofthesolidis
(cid:90)b
(cid:110) (cid:111)
V = π [R(y)]2−[r(y)]2 dy.
a
Wemayagainmemorizethisas
(cid:90)b
V = [areaofthecross-sectionofthesolidaty]dy.
a
x3
WorkedExample8.3.4. 1. Theregioninthefirstquadrantboundedbyy = andy = 2xisrevolved
8
aboutthey-axis. Findthevolumeoftheresultingsolid.
2. (Rotationaboutalineparalleltothey-axis)Theregionboundedbytheparabolay = x2 andtheline
y = 2xinthefirstquadrantisrevolvedabouttheline x = 2. Findthevolumeofthesolidgenerated.

2nd
| 26             |                |     |      | SemesterCalculusStudyGuide |     |     |     | MATH1036 |
| -------------- | -------------- | --- | ---- | -------------------------- | --- | --- | --- | -------- |
| Tutorial8.3.2. | 1. [C1]§6.2,p. |     | 653: | 90,92,95,98,99,101.        |     |     |     |          |
2. Amanufacturerdrillsaholethroughthecenterofasolidmetalsphereofradius15cm. Theholehas
| aradiusof9cm. | Whatisthevolumeoftheresultingmetalring? |     |     |     |     |     |     |     |
| ------------- | --------------------------------------- | --- | --- | --- | --- | --- | --- | --- |
|               |                                         |     |     | =   | =   | =   | =   |     |
3. (Very hard) A region is enclosed by y sinx, y cosx, x −π and x π. Find the volume of the
= −2.
solidformedifitisrotatedabouttheliney
| 8.4 Volumes | by  | Slicing |     |     |     |     |     |     |
| ----------- | --- | ------- | --- | --- | --- | --- | --- | --- |
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
sk(cid:3)ill)
1. understand and be able to use the Method of Slicing in computing the volume of a given solid
withknowncross-section.
(cid:3)
2. knowhowtosolvetheexaminableworkedoutproblemsfromthissection.
Ifaplaneintersectsasolid, thentheregioncommontotheplaneandthesolidiscalledacross-section
of the solid. With the disk method, we found the volume of a solid having a circular cross-section.
Thismethodcanbegeneralisedtosolidsofanyshapewithknowncross-sectionalarea. Commoncross-
sectionsaresquares,triangles,semicirclesandtrapezoids.
Therefore consider solids with the property that for each x in a closed interval [a,b] on the x-axis, the
plane perpendicular to the x-axis at the point with coordinate x intersects the solid in a cross-section,
| calledcross-sectionat | x,whoseareaisgivenbyA(x). |     |     |     |     |     |     |     |
| --------------------- | ------------------------- | --- | --- | --- | --- | --- | --- | --- |
y
x
∆x
Like before, to find the volume of the solid we partition [a,b] into n subintervals with partition points
a = x < x < x < ··· < x = bofequallength∆x = x − x generatingslices. Thevolumeofeach
| 0 1 | 2   | n   |     |     |     | i i−1 |     |     |
| --- | --- | --- | --- | --- | --- | ----- | --- | --- |
ithsliceis
|     |     |     |     | A(x∗)∆x, |       | x∗     |     |     |
| --- | --- | --- | --- | -------- | ----- | ------ | --- | --- |
|     |     |     | V   | ≈        | x i−1 | ≤ ≤ x. |     |     |
|     |     |     |     | i i      |       | i i    |     |     |
ConsequentlythevolumeofthesolidisapproximatedbytheRiemannsum
(cid:88)n
A(x∗)∆x.
|     |     |     |     | V ≈ |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
i
i=1
→ ∞wegettheprecisevolumeofthesolidbyslicing
Henceasn
(cid:90)b
(cid:88)n
|     |     |     | V = | lim A(x∗)∆x | =   | A(x)dx. |     |     |
| --- | --- | --- | --- | ----------- | --- | ------- | --- | --- |
i
n→∞
i=1
a

MATH1036 2nd SemesterCalculusStudyGuide 27
Wemayagainmemorizethisas
(cid:90)b
V = [areaofthecross-sectionofthesolidat x]dx.
a
WorkedExample8.4.1. 1. Findthevolumeofapyramidthathasaltitudehandsquarebaseofsideb.
y y
h
h−y
h
1b(cid:48)
y 2
x x
b 1b
2
2. Asolidhas,asitsbase,theregionboundedbytheellipse
x2
+y2 = 1.
4
Findthevolumeofthesolidgiventhatcross-sectionsperpendiculartothex-axisareequilateraltriangles.
−2
y
1
y
2y
y
2
x

28 2nd SemesterCalculusStudyGuide MATH1036
3. Acurvedwedgeiscutfromarightcircularcylinderofradiusr bytwoplanes. Oneplaneisperpen-
diculartotheaxisofthecylinder. Thesecondplanemakesanacuteangleθwiththefirstandintersects
it at the centre of the cylinder. The line of intersection is the y-axis. The line perpendicular to this line
andtheaxisofthecylinderisthe x-axis. Findthevolumeofthewedgewhere
(a)cross-sectionsareperpendiculartothey-axis
−r
θ
x
r
y
(b)cross-sectionsareperpendiculartothe x-axis.
x
−r
θ
r
y
Tutorial8.4.1. [C1]Section6.2,pp. 652–653,655: 68–72,113.
8.5 The Definite Integral as a Function
Thedefiniteintegralofanycontinuousfunction f fromt = atot = xdefinesanumber
(cid:90)x
g(x) = f(t)dt
a
that we can treat as a function of x. The next theorem brings out the remarkable fact that the func-
tion g defined above is an antiderivative of f which provides the link between the definite integral and
antiderivatives.

2nd
| MATH1036 |     |     |     | SemesterCalculusStudyGuide |     |     |     |     | 29  |
| -------- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- |
Theorem8.6(FundamentalTheoremofCalculus1,FTC1). If f iscontinuouson[a,b],thenthefunction
definedby
(cid:90)x
|     |     |     |     | g(x) = | f(t)dt, | a ≤ x | ≤ b |     |     |
| --- | --- | --- | --- | ------ | ------- | ----- | --- | --- | --- |
a
| isdifferentiableon[a,b]andg(cid:48)(x) |     |     | =   |     |     |     |     |     |     |
| -------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
f(x),i.e.
(cid:90)x
d
=
|     |     |     |     |     | f(t)dt | f(x). |     |     |     |
| --- | --- | --- | --- | --- | ------ | ----- | --- | --- | --- |
dx
a
Proof. Bythedefinitionofthederivative
g(x+h)−g(x)
|     |     | g(cid:48)(x) | =   |     |     |     |     |     |     |
| --- | --- | ------------ | --- | --- | --- | --- | --- | --- | --- |
lim
|     |     |     | h→0 |              | h       |          |     |     |     |
| --- | --- | --- | --- | ------------ | ------- | -------- | --- | --- | --- |
|     |     |     |     | (cid:82) x+h |         | (cid:82) |     |     |     |
|     |     |     |     |              | f(t)dt− | x        |     |     |     |
f(t)dt
|     |     |     | = lim | a                   |     | a           |           |           |     |
| --- | --- | --- | ----- | ------------------- | --- | ----------- | --------- | --------- | --- |
|     |     |     | h→0   |                     | h   |             |           |           |     |
|     |     |     |       |                    |     | (cid:90)x+h |           |          |     |
|     |     |     |       |  (cid:90)x |     |             | (cid:90)x |  |     |
1
|     |     |     | =    |     | f(t)dt+ | f(t)dt− |        |     |     |
| --- | --- | --- | ---- | --- | ------- | ------- | ------ | --- | --- |
|     |     |     | li m |     |         |         | f(t)dt |     |     |
|     |     |     | →    | h   |         |         |        |     |     |
|     |     |     | h    | 0   |         |         |        |     |     |
|     |     |     |      | a   |         | x       | a      |     |     |
(cid:90)x+h
1
|     |     |     | =   |     | f(t)dt. |     |     |     |     |
| --- | --- | --- | --- | --- | ------- | --- | --- | --- | --- |
lim
|     |     |     | h→0 | h   |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
x
(cid:82) x+h
NowapplytheMeanValueTheoremforIntegrals(Theorem8.5)totheintegral f(t)dt. Assuming
x
(cid:82) x+h
that h > 0 there exists c ∈ [x,x+h] such that f(t)dt = f(c)h. Moreover, since x ≤ c ≤ x+h, as
x
| h → 0,c → x. Thus |     |     |     |     |     |     |     |     |     |
| ----------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
(cid:90)x+h
|     | g(cid:48)(x) |       | 1   |        |       | 1       |       |             |     |
| --- | ------------ | ----- | --- | ------ | ----- | ------- | ----- | ----------- | --- |
|     |              | = lim |     | f(t)dt | = lim | (f(c)h) | = lim | f(c) = f(x) |     |
+
|     |     | h→0+ | h   |     | h→0+ | h   | h→0+ |     |     |
| --- | --- | ---- | --- | --- | ---- | --- | ---- | --- | --- |
x
| wherethelastidentityfollowsfromthecontinuityof |     |     |     |     |     | f.  |     |     |     |
| ---------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
(cid:3)
| Asimilarargumentcanbemadeforh |     |                                      |     | < 0. |     |     |     |     |     |
| ----------------------------- | --- | ------------------------------------ | --- | ---- | --- | --- | --- | --- | --- |
| WorkedExample8.5.1.           |     | Completethefollowingfirstderivatives |     |      |     |     |     |     |     |
1.
(cid:90)x
d
sintdt
dx
π
2.
(cid:90)x
d
sint2dt
dx
π
Worked Example8.5.2. Let f be continuouson [a,b] andassume thatu,v : [c,d] → [a,b] arediffer-
entiable. Showthat
(cid:90)v(x)
d
|     |     |     |     | =   | f(v(x))v(cid:48)(x)− | f(u(x))u(cid:48)(x). |     |     |     |
| --- | --- | --- | --- | --- | -------------------- | -------------------- | --- | --- | --- |
f(t)dt
dx
u(x)

30 2nd SemesterCalculusStudyGuide MATH1036
WorkedExample8.5.3. Evaluatethefollowingderivatives.
1.
(cid:90)x3
d dt
.
dx 1+t
0
2.
(cid:90)2x
d dt
.
dx 1+t2
x
Tutorial8.5.1. Findthederivativesofthefollowingfunctions,giventhataisaconstant:
(cid:90)secx
1
(cid:90)x3
(cid:18)x(cid:19)
(cid:90)x
1
(a) f(x) = dt, (b)g(x) = sint4dt, (c)h(x) = arcsin − √ dt, a > 0.
1+t2 a a2−t2
tanx x2 a

MATH1036 2nd SemesterCalculusStudyGuide 31
Integration Review
(cid:90)
exdx = ex+C
(cid:90)
ax
axdx = +C
lna
(cid:90)
lnxdx = xlnx−x+C
(cid:90)
sinxdx = −cosx+C
(cid:90)
cosxdx = sinx+C
(cid:90)
tanxdx = ln|secx|+C
(cid:90)
cosecxdx = ln|cosecx−cotx|+C
(cid:90)
secxdx = ln|secx+tanx|+C
(cid:90)
cotxdx = ln|sinx|+C
(cid:90)
sec2xdx = tanx+C
(cid:90)
secxtanxdx = secx+C
(cid:90)
cosec2xdx = −cotx+C

| Chapter  |     | 9   |             |     |     |            |     |     |     |
| -------- | --- | --- | ----------- | --- | --- | ---------- | --- | --- | --- |
| Advanced |     |     | Integration |     |     | Techniques |     |     |     |
9.1 Inverse Trigonometric, Exponential and Logarithmic Integrals
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
skill)
(cid:3)
(cid:3) 1. identifyanintegralasthatofaninversetrigonometrictype,
2. use the Method of Completing the Square in reducing a quadratic in the integrand and solve
suchintegrals,
(cid:3)
3. identifythatanintegrandisofthelogarithmictypewherethenumeratoristhederivativeofthe
denominatorandsolvesuchintegrals,
(cid:3)
4. knowhowtosolvetheexaminableworkedoutproblemsfromthissection.
Thissectionisafollowuptothederivativesandantiderivativesofinversetrigonometricfunctions. We
| recall | (cid:90) |     |           |                   |     | (cid:90) |       |           |                   |
| ------ | -------- | --- | --------- | ----------------- | --- | -------- | ----- | --------- | ----------------- |
|        |          | 1   |           | (cid:18)x(cid:19) |     |          | 1     | 1         | (cid:18)x(cid:19) |
|        |          |     | =         | +C                |     |          |       | =         | +C.               |
|        |          | √   | dx arcsin |                   | and |          |       | dx arctan |                   |
|        |          |     |           | a                 |     |          | a2+x2 | a         | a                 |
a2−x2
| WorkedExample9.1.1. |     |     | 1. Evaluate |     |     |     |     |     |     |
| ------------------- | --- | --- | ----------- | --- | --- | --- | --- | --- | --- |
(cid:90)
1
√
dx
3−x2
2. Evaluate
(cid:90)1
x+3
|     |     |     |     |     | √   | dx. |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
4−x2
0
9.1.1 CompletingtheSquare
Given an integrand with a polynomial in the numerator and an irreducible quadratic or the square root
of a reducible quadratic with a negative quadratic term in the denominator, we complete the square of
thequadratic. Theoutcomeoftheintegralisaninversetrigonometricfunction.
WorkedExample9.1.2. Evaluatethefollowingbycompletingthesquareinthedenominator.
| 1.  |     |     |     | (cid:90) |     |     |     |     |     |
| --- | --- | --- | --- | -------- | --- | --- | --- | --- | --- |
dx
.
2x2−8x+10
32

MATH1036 2nd SemesterCalculusStudyGuide 33
2.
9
(cid:90)4
dx
√ .
3x−x2
3
2
9.1.2 ExponentialandLogarithmicIntegrals
(cid:90)
d 1 1
Recallthatinthefirstsemesterweprovedthat ln|x| = andconsequently, dx = ln|x|+C (see
dx x x
FirstSemesterCalculusStudyGuideTheorem4.2). Wealsorecall
(cid:90) f(cid:48)(x)
dx = ln|f(x)|+C.
f(x)
WorkedExample9.1.3. Evaluatethefollowingintegrals.
1. (a)
(cid:90)
tanxdx.
1. (b)
(cid:90) (cid:32) (cid:33)
x x
+ dx.
x2−1 (x2−1)2
2. (a)
(cid:90)
secxdx.
(b)
π
(cid:90)4
(cid:112)
1+tan2xdx.
0
3.
(cid:90)
cotxdx.
4.
(cid:90)
cosecxdx.
Wewillalsoencountersubstitutions(andintegrals)involvinglnxasthefollowingexamplesillustrate.
WorkedExample9.1.4. Evaluatethefollowingintegrals.
1.
(cid:90)e
(1+lnx)2
dx.
x
1
2.
(cid:90)
2x
dx.
(x+1)2
3.
(cid:90)
2x−1
dx.
x2−6x+13

2nd
| 34  |     |     | SemesterCalculusStudyGuide |     |     |     | MATH1036 |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------- |
d
|            |     | ax = axlna. |                                              |     |     |     |     |
| ---------- | --- | ----------- | -------------------------------------------- | --- | --- | --- | --- |
| Recallthat |     |             | Thentheintegralsoftheexponentialfunctionsare |     |     |     |     |
dx
(cid:90)
ax
|     |     |     |     | axdx = | +C  |     |     |
| --- | --- | --- | --- | ------ | --- | --- | --- |
lna
andinparticular
(cid:90)
|                     |     |                                |     | exdx = ex+C |     |     |     |
| ------------------- | --- | ------------------------------ | --- | ----------- | --- | --- | --- |
| WorkedExample9.1.5. |     | Evaluatethefollowingintegrals. |     |             |     |     |     |
1.
(cid:90)
|     |     |     |     | 5x2−x2 | dx. |     |     |
| --- | --- | --- | --- | ------ | --- | --- | --- |
√
= ex =
2. Find the volume of the solid obtained by revolving the region bounded by y and y x on
| [0,1]aboutthe   |     | x-axis.        |                              |     |     |     |     |
| --------------- | --- | -------------- | ---------------------------- | --- | --- | --- | --- |
| Tutorial9.1.1.  |     | 1. [C2]§3.3,p. | 297: 161,163.                |     |     |     |     |
| 2. [C1]§5.6,pp. |     | 605–606:       | 331,333,337,338,349,355,357. |     |     |     |     |
3. Evaluatethefollowingintegrals.
(cid:90)2
|     |         |     | (cid:90) |        | (cid:90) x+2 |     |     |
| --- | ------- | --- | -------- | ------ | ------------ | --- | --- |
|     | dx      |     | 2x       |        |              |     |     |
| (a) |         | (b) |          | dx (c) | √            | dx  |     |
|     | x2−2x+2 |     | x2+6x+13 |        |              |     |     |
−x2−4x
0
| (cid:90)3 |      |     | (cid:90)2  |     |     |     |     |
| --------- | ---- | --- | ---------- | --- | --- | --- | --- |
|           | 2x−3 |     | lnx(1−lnx) |     | lnx |     |     |
=
| (d) | √           | dx (e) |                 | dx HINT:letu |     |     |     |
| --- | ----------- | ------ | --------------- | ------------ | --- | --- | --- |
|     | 4x−x2       |        | x3              |              |     | x   |     |
| 2   |             |        | 1               |              |     |     |     |
| 9.2 | Integration | by     | Parts Revisited |              |     |     |     |
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
skill)
(cid:3)
1. usethetechniqueofIntegrationbyPartsinsolvingintegralsinvolvinghyperbolicfunctions,
(cid:3)
(cid:3) 2. provethevariousreductionformulæusingIBPandusetheminevaluatingagivenintegral,
3. knowhowtosolvetheexaminableworkedoutproblemsfromthissection.
WerevisitIBPbutfocusonsomeadditionalproblemsonintegrationbyparts. Inparticular,weconsider
the proofs of various reduction formulae that are useful in simplifying certain integrals with integrand
| havingjustpowersofknownfunctions. |     |     |     | WerecalltheIBPformula |          |     |     |
| --------------------------------- | --- | --- | --- | --------------------- | -------- | --- | --- |
|                                   |     |     |     | (cid:90)              | (cid:90) |     |     |
|                                   |     |     |     | udv = uv−             | vdu      |     |     |
and
|     |     |     | (cid:90)b |     | (cid:90)b |     |     |
| --- | --- | --- | --------- | --- | --------- | --- | --- |
(cid:35)b
|     |     |     |     | udv = uv − | vdu. |     |     |
| --- | --- | --- | --- | ---------- | ---- | --- | --- |
a
|     |     |     | a   |     | a   |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |

2nd
| MATH1036            |                                        | SemesterCalculusStudyGuide |     |     | 35  |
| ------------------- | -------------------------------------- | -------------------------- | --- | --- | --- |
| WorkedExample9.2.1. | UseIBPtoevaluatethefollowingintegrals. |                            |     |     |     |
1.
(cid:90)1
xsinhxdx.
0
2.
(cid:90)
I = (lnx)2dx.
3. Usethereductionformula
|     |     | (cid:90) |             | (cid:90)   |     |
| --- | --- | -------- | ----------- | ---------- | --- |
|     |     | (lnx)ndx | = x(lnx)n−n | (lnx)n−1dx |     |
(cid:82)
| toevaluate (lnx)3dxtogetherwiththesolutionofexample2above. |     |     |     |     |     |
| ---------------------------------------------------------- | --- | --- | --- | --- | --- |
Solution.
|     | (cid:90) |             | (cid:90) |     |     |
| --- | -------- | ----------- | -------- | --- | --- |
|     | (lnx)3dx | = x(lnx)3−3 | (lnx)2dx |     |     |
= x(lnx)3−3(x(lnx)2−2xlnx+2x)+C
= x(lnx)3−3x(lnx)2+6xlnx−6x+C.
4. Provethereductionformula
|     | (cid:90) |                |     | (cid:90)  |     |
| --- | -------- | -------------- | --- | --------- | --- |
|     |          | 1              | n−2 |           |     |
|     | secnxdx  | = secn−2xtanx+ |     | secn−2xdx |     |
(n ≥ 2)
|     |     | n−1 | n−1 |     |     |
| --- | --- | --- | --- | --- | --- |
(cid:82)
| andthenusethisformulatoevaluate |     | sec3xdx. |     |     |     |
| ------------------------------- | --- | -------- | --- | --- | --- |
Alltheproofsofthereductionformulaeareexaminable! Youmustnotlearntheproofbyrotebutrather
know the technique in proving the reduction formula as this is easier. You do not need to remember
theseformulæ.
Tutorial9.2.1. 1. Letnbeanintegerwithn ≥ 2. Useintegrationbypartstoprovethereductionformula
|     | (cid:90) |             |     | (cid:90)  |     |
| --- | -------- | ----------- | --- | --------- | --- |
|     |          | cosn−1xsinx |     | n−1       |     |
|     | cosnxdx  | =           | +   | cosn−2xdx |     |
|     |          |             | n   | n         |     |
(cid:82)
cos4xdx.
andthenevaluate
Doesthisformulaalsoholdifnisallowedtobearealnumber? Discussrestrictionsandcomparewith
otherformulæ.
2. Provethat
(cid:90)
eax
|     |     | eaxcosbxdx | = (bsinbx+acosbx)+C |     |     |
| --- | --- | ---------- | ------------------- | --- | --- |
a2+b2
= (cid:82)
| andthenevaluateI | excosxdx. |     |     |     |     |
| ---------------- | --------- | --- | --- | --- | --- |
Alsostateforwhichrealnumbersaandbtheformulaistrue.
| 3. Provethat | (cid:90) |     |     |     |     |
| ------------ | -------- | --- | --- | --- | --- |
eax
|     |     | eaxsinbxdx | = (asinbx−bcosbx)+C |     |     |
| --- | --- | ---------- | ------------------- | --- | --- |
a2+b2

2nd
| 36  |     |     |     | SemesterCalculusStudyGuide |     |     |     |     |     | MATH1036 |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------- |
(cid:82)
=
andthenevaluateI sin(lnx)dx. Alsostateforwhichrealnumbersaandbtheformulaistrue.
4. Provethat
|                            |     |     | (cid:90)      |              |             |     | (cid:90)   |      |     |     |
| -------------------------- | --- | --- | ------------- | ------------ | ----------- | --- | ---------- | ---- | --- | --- |
|                            |     |     |               | (lnx)ndx     | = x(lnx)n−n |     | (lnx)n−1dx |      |     |     |
|                            |     |     |               | =            |             |     | =          | =    |     |     |
| 5. Whatistheaveragevalueof |     |     | f(x)          | cos5xbetween |             | x   | −πand      | x 0? |     |     |
| 9.3 Trigonometric          |     |     | Substitutions |              |             |     |            |      |     |     |
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
skill)
(cid:3)
1. identifythatatrigonometricsubstitutionisapplicableinreducingtheintegrand,
(cid:3)
2. usetheappropriatetrigonometricsubstitutioninreducingadefiniteorindefiniteintegral,
(cid:3)
3. evaluateatrigonometricintegral,
(cid:3)
4. useasketchofarepresentativerightangletrianglewithangleθtotransformfromfunctionsof
| θbacktofunctionsof |     |     | xinresolvingtheintegral, |     |     |     |     |     |     |     |
| ------------------ | --- | --- | ------------------------ | --- | --- | --- | --- | --- | --- | --- |
(cid:3)
5. incorporate other integration techniques, in particular completing the square of an irreducible
quadratic in the integrand and then applying a trigonometric substitution to resolve a given
integral,
(cid:3)
6. knowhowtosolvetheexaminableworkedoutproblemsfromthissection.
|     |     |     |     |     |     |     |     | √   |     | √ √ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Iftheintegrandcontainsoneoftheexpressionsa2−x2,a2+x2, x2−a2, a2−x2, a2+x2or x2−a2
witha > 0,wecaneliminatetheexpressionbyusingtheappropriatetrigonometricsubstitutionlistedin
thefollowingtable.
|       |     | Expression |        |       | Trigonometricsubstitution |           |     |       |     |     |
| ----- | --- | ---------- | ------ | ----- | ------------------------- | --------- | --- | ----- | --- | --- |
|       |     | √          |        |       |                           |           |     | π π   |     |     |
| a2−x2 |     |            |        |       |                           | =         |     |       |     |     |
|       |     | or         | a2−x2, | |x| < | a Let                     | x asinθ,− |     | < θ < |     |     |
|       |     |            |        |       |                           |           |     | 2 2   |     |     |
√
|       |       |     |          |       |       |             |     | π π       |     |     |
| ----- | ----- | --- | -------- | ----- | ----- | ----------- | --- | --------- | --- | --- |
|       | a2+x2 |     | or a2+x2 |       | Let   | x = atanθ,− |     | < θ <     |     |     |
|       |       |     |          |       |       |             |     | 2 2       |     |     |
|       |       | √   |          |       |       |             |     | π         |     | 3π  |
| x2−a2 |       |     |          |       |       | =           |     |           |     |     |
|       |       | or  | x2−a2,   | |x| > | a Let | x asecθ,0   |     | ≤ θ < orπ | ≤   | θ < |
|       |       |     |          |       |       |             |     | 2         |     | 2   |
WorkedExample9.3.1.
1.
(cid:90)
dx
|     |     |     |     |     |     | √   | .   |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
x2 9−x2
2.
(cid:90)
(cid:112)
x2−2xdx.

2nd
| MATH1036       |                 | SemesterCalculusStudyGuide    |     |     |     | 37  |
| -------------- | --------------- | ----------------------------- | --- | --- | --- | --- |
| Tutorial9.3.1. | 1. [C2]§3.3,pp. | 296–297: 136–139,142,151,175. |     |     |     |     |
2. Evaluate
(cid:90)5
2x−3
√ dx.
x2−4
3
| 9.4 Trigonometric | Integrals |     |     |     |     |     |
| ----------------- | --------- | --- | --- | --- | --- | --- |
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
skill)
(cid:3)
1. identify the type of trigonometric integral that is given and use the appropriate technique to
solvethegiventrigonometricintegral,
(cid:3)
2. combine previous techniques, in particular the Substitution Rule and IBP, together with the
reductionformulaetosolvethegiventrigonometricintegral,
(cid:3)
3. knowhowtosolvetheexaminableworkedoutproblemsfromthissection.
(cid:44)
| 9.4.1 IntegralsInvolvingsinkx |     | andcoskx | withk | 0   |     |     |
| ----------------------------- | --- | -------- | ----- | --- | --- | --- |
Thesolutionfollowsbydirectsubstitution. Itmaybeeasiertorememberthefollowingformulae.
(cid:90)
1
|     |     | sinkxdx | = − coskx+C |     |     |     |
| --- | --- | ------- | ----------- | --- | --- | --- |
k
and
(cid:90)
1
|     |     | coskxdx | = sinkx+C. |     |     |     |
| --- | --- | ------- | ---------- | --- | --- | --- |
k
WorkedExample9.4.1.
1.
(cid:90)
sin4xdx.
2.
(cid:90)
cos7xdx.
| 9.4.2 Powersofsinx | andPowersofcosx |     |     |     |     |     |
| ------------------ | --------------- | --- | --- | --- | --- | --- |
Youmustreviseallthetrigonometricidentities,inparticular
1+cos2x
1−cos2x
|     | sin2x | =   | and cos2x | =   | .   |     |
| --- | ----- | --- | --------- | --- | --- | --- |
|     |       | 2   |           | 2   |     |     |
Letnbeanypositiveinteger.
(cid:82)
| 1. Toevaluate | cosnxdxweproceedasfollows |     |     |     |     |     |
| ------------- | ------------------------- | --- | --- | --- | --- | --- |
1+cos2x
| (a)niseven: | Usetheidentitycos2x | =   | .   |     |     |     |
| ----------- | ------------------- | --- | --- | --- | --- | --- |
2
Repeatthisprocedureuntilyouhaveoddpowers.

38 2nd SemesterCalculusStudyGuide MATH1036
(b)nisodd: Wewrite
(cid:90) (cid:90)
cosnxdx = cosn−1xcosxdx
and,sincen−1iseven,weproceedwithusingtheidentitycos2x = 1−sin2xfollowedbythesubstitution
u = sinx.
(cid:82)
2. Toevaluate sinnxdxweproceedasfollows
1−cos2x
(a) n is even: Use the identity sin2x = , which reduces the integral to the case 1 or to direct
2
integration.
(cid:82)
WorkedExample9.4.2. 1. Evaluate sin2xdx.
(cid:82)
2. Evaluate sin4xdx.
(b)nisodd: Wewrite
(cid:90) (cid:90)
sinnxdx = sinn−1xsinxdx.
Thenn−1isevenandweproceedwithusingtheidentitysin2x = 1−cos2x. Thenmakethesubstitution
u = cosx.
(cid:90)
WorkedExample9.4.3. Evaluate sin5xdx.
9.4.3 ProductsofPowersofsinx andPowersofcosx
Therearetwospecificcases.
(cid:82)
1. sinmxcosnxdxformoddornodd
Here at least one of the two powers is odd. Suppose that n is odd. If n = 1 then we have easily the
solutionbydirectsubstitutionu = sinx:
(cid:90)
1
sinmxcosxdx = sinm+1x+C. (*)
m+1
Ifn > 1thenwewritecosnx = cosn−1xcosx. Sincen−1isevenwemayresorttosubsection9.4.2(1b).
Theintegralthentakestheform
(cid:90)
(sumofpowersof sinx)cosxdx
whichisthenbrokenupintointegralsoftheform(*).
Ifmisodd,thenresorttosubsection9.4.2(2b)whichrealisesintegralsoftheform
(cid:90)
(sumofpowersof cosx)sinxdx
whichcanbebrokenupintointegralsofthetype
(cid:90)
1
sinxcosmxdx = − cosm+1x+C
m+1
Worked Example 9.4.4. 1. Identify the odd power and proceed as described above to evaluate the
following.
(cid:90)
(a) sin2xcos5xdx.
(cid:90) sin3x
(b) √ dx.
cosx

2nd
| MATH1036 |     |     |     | SemesterCalculusStudyGuide |     |     |     |     |     |     | 39  |
| -------- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | --- | --- |
(cid:82)
2. sinmxcosnxdxformandnbotheven
Weusetheidentities
|     |          |     | 1     |     |       | 1−cos2x |     |       | 1+cos2x |     |     |
| --- | -------- | --- | ----- | --- | ----- | ------- | --- | ----- | ------- | --- | --- |
|     |          |     | =     |     | sin2x | =       |     | cos2x | =       |     |     |
|     | sinxcosx |     | sin2x | or  |       |         |     | or    |         | .   |     |
|     |          |     | 2     |     |       |         | 2   |       | 2       |     |     |
(cid:90)
sin4xcos4xdx.
| WorkedExample9.4.5. |     |     | Evaluate |     |     |     |     |     |     |     |     |
| ------------------- | --- | --- | -------- | --- | --- | --- | --- | --- | --- | --- | --- |
9.4.4 ProductsofsinandcoswithDifferentArguments
(cid:82)
| 1. Toevaluate | sinmxsinnxdx |     |     | usetheidentity |     |     |     |     |     |     |     |
| ------------- | ------------ | --- | --- | -------------- | --- | --- | --- | --- | --- | --- | --- |
1
|     |     |     | sinmxsinnx |     | = [cos(m−n)x−cos(m+n)x]. |     |     |     |     |     |     |
| --- | --- | --- | ---------- | --- | ------------------------ | --- | --- | --- | --- | --- | --- |
2
| WorkedExample9.4.6. |     |     | Evaluate |     |     |     |     |     |     |     |     |
| ------------------- | --- | --- | -------- | --- | --- | --- | --- | --- | --- | --- | --- |
π
(cid:90)4
sin2xsin3xdx.
0
(cid:82)
| 2. Toevaluate | sinmxcosnxdx |     |     | usetheidentity |     |     |     |     |     |     |     |
| ------------- | ------------ | --- | --- | -------------- | --- | --- | --- | --- | --- | --- | --- |
1
|     |     |     |     |     | = [sin(m+n)x+sin(m−n)x]. |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | ------------------------ | --- | --- | --- | --- | --- | --- |
sinmxcosnx
2
| WorkedExample9.4.7. |     |     | Evaluate |     |     |     |     |     |     |     |     |
| ------------------- | --- | --- | -------- | --- | --- | --- | --- | --- | --- | --- | --- |
(cid:90)
sin5xcos4xdx.
(cid:82)
| 3. Toevaluate | cosmxcosnxdx |     |     | usetheidentity |     |     |     |     |     |     |     |
| ------------- | ------------ | --- | --- | -------------- | --- | --- | --- | --- | --- | --- | --- |
1
|     |     |     |     |     | = [cos(m+n)x+cos(m−n)x]. |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | ------------------------ | --- | --- | --- | --- | --- | --- |
cosmxcosnx
2
(cid:82)
| WorkedExample9.4.8. |     |     | Evaluate | cos5xcos2xdx. |     |     |     |     |     |     |     |
| ------------------- | --- | --- | -------- | ------------- | --- | --- | --- | --- | --- | --- | --- |
Intheabove,notetheuseofsubsection9.4.1.
| 9.4.5 Powersoftanx |     |     | andcotx |     |     |     |     |     |     |     |     |
| ------------------ | --- | --- | ------- | --- | --- | --- | --- | --- | --- | --- | --- |
Notethatstudentsmustknowthat
|     |     | (cid:90) |     |              |     |     | (cid:90) |               |     |     |     |
| --- | --- | -------- | --- | ------------ | --- | --- | -------- | ------------- | --- | --- | --- |
|     |     |          |     | = ln|secx|+C |     |     |          | = ln|sinx|+C. |     |     |     |
|     |     | tanxdx   |     |              |     | and | cotxdx   |               |     |     |     |
(cid:82)
1. tannxdx
| Wefactorouttan2x,usetheidentitysec2x |     |          |     |           | = 1+tan2xandwrite |     |          |                     |     |     |     |
| ------------------------------------ | --- | -------- | --- | --------- | ----------------- | --- | -------- | ------------------- | --- | --- | --- |
|                                      |     | (cid:90) |     | (cid:90)  |                   |     | (cid:90) |                     |     |     |     |
|                                      |     | tannxdx  |     | = tann−2x | tan2xdx           |     | =        | tann−2x(sec2x−1)dx. |     |     |     |
Thisthenisseparatedtogiveanintegralofthefollowingtype,whichiseasilyresolvedbydirectsubsti-
=
| tutionu | tanx: |     |     |     |     |     |     |     |     |     |     |
| ------- | ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
(cid:90)
tanm+1x
|     |     |     |     | tanmxsec2xdx |     |     | =   | +C. |     |     |     |
| --- | --- | --- | --- | ------------ | --- | --- | --- | --- | --- | --- | --- |
m+1

2nd
| 40  |     | SemesterCalculusStudyGuide |     | MATH1036 |
| --- | --- | -------------------------- | --- | -------- |
(cid:90)
tan4xdx.
| WorkedExample9.4.9. |     | Evaluate |     |     |
| ------------------- | --- | -------- | --- | --- |
(cid:82)
2. cotnxdx
= 1+cot2x.
Similartoabovebutweusecosec2x
(cid:82)
cot3xdx.
| WorkedExample9.4.10. |     | Evaluate |     |     |
| -------------------- | --- | -------- | --- | --- |
Solution:
|     |     | (cid:90) (cid:90) |             |     |
| --- | --- | ----------------- | ----------- | --- |
|     |     | cot3xdx =         | cotxcot2xdx |     |
(cid:90)
= cotx(cosec2x−1)dx
(cid:90) (cid:90)
= cotxcosec2xdx− cotxdx
(cid:90)
= cotxcosec2xdx−ln|sinx|.
(cid:82)
|                       |     | =            | =                      |     |
| --------------------- | --- | ------------ | ---------------------- | --- |
| For cotxcosec2xdxletu |     | cotx. Thendu | −cosec2xdxsothat       |     |
|                       |     | (cid:90)     | (cid:90)               |     |
|                       |     | cot3xdx =    | cotxcosec2xdx−ln|sinx| |     |
(cid:90)
=
− udu−ln|sinx|
1
= − u2−ln|sinx|+C
2
1
= − cot2x−ln|sinx|+C.
2
Tutorial9.4.1. 1. [C2]§3.2,pp. 283–284: 79,8082–84,103,104,107. In103,104,107alsofindthe
indefiniteintegral.
arcsinx
2. Find the volume of the solid of revolution formed when the region enclosed by y = , x = 1
5
=
| andthe xaxisisrotatedabouttheline |          | x 1.          |     |     |
| --------------------------------- | -------- | ------------- | --- | --- |
| 9.5 Partial                       | Fraction | Decomposition |     |     |
(cid:90)
p(x)
Thissectionprovidesatechniquethat canbeusedtoevaluaterationalintegralsoftheform dx
q(x)
| with p(x)andq(x)polynomials,q(x) |     | (cid:44) 0. |     |     |
| -------------------------------- | --- | ----------- | --- | --- |
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
skill)
(cid:3)
(cid:3) 1. understandtheconceptofpartialfractiondecomposition,
2. identifyanimproperrationalfunction[deg(numerator)≥deg(denominator)]andperformLong
Divisionreducingittoaproperrationalfunction,
(cid:3)
3. meettheprerequisiterequirementoffactorizingthedenominatorofarationalfunction,

2nd
| MATH1036 |     |     | SemesterCalculusStudyGuide |     |     |     |     |     |     | 41  |
| -------- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | --- | --- |
(cid:3)
4. identify the type of factors in the denominator of a rational function as either non-repeating
linear,linearrepeated,irreduciblenon-repeatingquadraticorirreduciblerepeatedquadratic,
(cid:3)
5. decomposeanyrationalfunctionintopartialfractionsusingtheappropriateoutcomeofdenom-
inatorfactorization,
(cid:3)
6. usethetechniqueofpartialfractiondecompositioninevaluatinganintegralofarationalfunc-
(cid:3) tion,
7. knowhowtosolvetheexaminableworkedoutproblemsfromthissection.
1. degree(p(x))<degree(q(x))
CaseI Denominatorisaproductofdistinctlinearfactors
If
|     | p(x) |     | p(x)      |     |     |     | p(x)   |     |     |     |
| --- | ---- | --- | --------- | --- | --- | --- | ------ | --- | --- | --- |
|     |      | =   |           | =   |     |     |        |     |     |     |
|     |      |     | (cid:81)n |     | x+b | x+b |        | x+b |     |     |
|     | q(x) |     | x+b)      | (a  |     | )(a | )···(a |     | )   |     |
|     |      |     | (a        |     | 1   | 1 2 | 2      | n   | n   |     |
|     |      |     | i         | i   |     |     |        |     |     |     |
i=1
b
wherea (cid:44) 0foralli = 1,2,...,nandallnumbers i aredistinct,theneachlinearfactora x+b inthe
| i   |     |     |     |     |     |     |     |     | i   | i   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
a
i
A
denominator gives rise to a term of the form i with constant A, so that the rational function is
|     |     |     |     |     | x+b |     |     | i   |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
a i i
decomposedas
|     |     | p(x) | A   |     | A   |       |     | A   |     |     |
| --- | --- | ---- | --- | --- | --- | ----- | --- | --- | --- | --- |
|     |     |      | = 1 | +   | 2   | +···+ |     | n   | .   |     |
|     |     |      | x+b |     | x+b |       |     | x+b |     |     |
|     |     | q(x) | a   |     | a   |       | a   |     |     |     |
|     |     |      | 1   | 1   | 2   | 2     | n   | n   |     |     |
p(x)
Thisiscalledthepartialfractionsdecompositionoftherationalfunction .
q(x)
WorkedExample9.5.1. Evaluatethefollowingintegralsbyfirstdecomposingtheintegrandintopartial
fractions.
(a)
|     |     |     |     | (cid:90) | 3x+4 |     |     |     |     |     |
| --- | --- | --- | --- | -------- | ---- | --- | --- | --- | --- | --- |
dx.
x2+x−6
(b)
(cid:90)
4x2+13x−9
dx.
x3+2x2−3x
CaseII Denominatorisaproductofrepeatedlinearfactors
Foreachfactorofq(x)oftheform(ax+b)r wherer ≥ 1,thepartialfractiondecompositioncontainsa
sumofrpartialfractionsoftheform
|     |     | A    | A       |     | A       |       |         | A   |     |     |
| --- | --- | ---- | ------- | --- | ------- | ----- | ------- | --- | --- | --- |
|     |     |      | 1 +     | 2 + | 3       | +···+ |         | r   | .   |     |
|     |     | ax+b | (ax+b)2 |     | (ax+b)3 |       | (ax+b)r |     |     |     |
WorkedExample9.5.2. Decomposetheintegrandintopartialfractionsandthenevaluatetheintegral.
(a)
|     |     |     |     | (cid:90) | 2x2+3 |     |     |     |     |     |
| --- | --- | --- | --- | -------- | ----- | --- | --- | --- | --- | --- |
dx
x(x−1)2
(b)
(cid:90)
12
dx
x4−x3−2x2

2nd
| 42  |     |     |     | SemesterCalculusStudyGuide |     |     |     |     |     | MATH1036 |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------- |
(c)
(cid:90)
3x3−18x2+29x−4
dx
(x+1)(x−2)3
| CaseIII | Denominatorcontainsnon-repeatingirreduciblequadratics |     |     |     |     |     |     |     |     |     |
| ------- | ----------------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
coefficients
Every nonconstant polynomial with real can be written as a product of linear and irre-
duciblequadraticpolynomialswithrealcoefficients. Hereaquadraticpolynomialwithrealcoefficients
ax2+bx+c,a (cid:44) 0,iscalledirreducibleifithasnorealroot. Thishappensifandonlyifitsdiscriminant
isnegative,i.e.,∆ = b2−4ac < 0. Suchafactoriscallednon-repeatingifthepolynomialhasnoother
(irreducible)quadraticfactoroftheformd(ax2+bx+c). Eachnon-repeatingquadraticfactorax2+bx+c
inthedenominatorgivesrisetoatermoftheform
Ax+B
ax2+bx+c
p(x)
in the partial fractions decomposition of the rational function . Completing the square in the de-
q(x)
nominator,theintegralcanbeevaluatedas
|     | (cid:90) | 2Dx+E |     | (cid:90) | 2(x−d) |     |     | (cid:90) |     |     |
| --- | -------- | ----- | --- | -------- | ------ | --- | --- | -------- | --- | --- |
1
|     |     |           | dx  | = D               |     | dx+(E+2Dd) |     |          |           | dx  |
| --- | --- | --------- | --- | ----------------- | --- | ---------- | --- | -------- | --------- | --- |
|     |     | (x−d)2+e2 |     | (x−d)2+e2         |     |            |     |          | (x−d)2+e2 |     |
|     |     |           |     |                   |     |            |     | (cid:32) | (cid:33)  |     |
|     |     |           |     |                   |     | E+2Dd      |     |          | x−d       |     |
|     |     |           |     | = Dln|(x−d)2+e2|+ |     |            |     | arctan   | +C.       |     |
|     |     |           |     |                   |     |            | e   |          | e         |     |
WorkedExample9.5.3.
Decomposetheintegrandintopartialfractionsandthenevaluatetheintegral.
(a)
|     |     |     |     | (cid:90) | 2x3−4x−8 |     |     |     |     |     |
| --- | --- | --- | --- | -------- | -------- | --- | --- | --- | --- | --- |
dx
(x2−x)(x2+4)
(b)
|     |     |     |     |     | (cid:90) √ |     |     |     |     |     |
| --- | --- | --- | --- | --- | ---------- | --- | --- | --- | --- | --- |
3x+1
dx.
x
| CaseIV | Denominatorcontainsrepeatedirreduciblequadratics |     |     |     |      |         |     |     |     |     |
| ------ | ------------------------------------------------ | --- | --- | --- | ---- | ------- | --- | --- | --- | --- |
|        |                                                  |     |     |     | (ax2 | +bx+c)r | ∆   |     |     |     |
Each power of irreducible quadratic factors, , < 0, gives rise to an expression of the
form
|     |     | x+B      |             | x+B   |             | x+B   |       |             | x+B |     |
| --- | --- | -------- | ----------- | ----- | ----------- | ----- | ----- | ----------- | --- | --- |
|     |     | A 1      | 1           | A 2 2 |             | A 3 3 |       |             | A r | r   |
|     |     |          | +           |       | +           |       | +···+ |             |     | .   |
|     |     | ax2+bx+c | (ax2+bx+c)2 |       | (ax2+bx+c)3 |       |       | (ax2+bx+c)r |     |     |
WorkedExample9.5.4. Decomposetheintegrandintopartialfractionsandthenevaluate
|     |     |     |     |     | (cid:90) 8x3+13x |     |     |     |     |     |
| --- | --- | --- | --- | --- | ---------------- | --- | --- | --- | --- | --- |
dx.
(x2+2)2
WorkedExample9.5.5. Givethepartialfractiondecompositionofthefollowing:
3x4+x3+20x2+3x+31
| (a) |     |     | ,   |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
(x2+4)2(x+1)
x6−x3+1
| (b) |     | .   |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
x4+9x2
| Solution. | Onemaybetemptedtowrite |     |     |         |     |        |      |     |     |     |
| --------- | ---------------------- | --- | --- | ------- | --- | ------ | ---- | --- | --- | --- |
|           |                        |     |     | x6−x3+1 | A   | B Cx+D |      |     |     |     |
|           |                        |     |     |         | =   | + +    |      | .   |     |     |
|           |                        |     |     | x4+9x2  | x   | x2     | x2+9 |     |     |     |

MATH1036 2nd SemesterCalculusStudyGuide 43
However,thisisincorrectsincedeg(numerator)>deg(denominator)sothatwehavetodolongdivision
first! Consequently,
x6−x3+1 −x3+81x2+1
= x2−9+
x4+9x2 x4+9x2
−x3+81x2+1 A B Cx+D
= x2−9+ = x2−9+ + + .
x2(x2+9) x x2 x2+9
WorkedExample9.5.6. Inthefollowingexamplescompletethepartialfractiondecompositioninterms
ofvariables(A,B,C,D,...)incolumn2,thensolveforthesevariablesandwritethefinaldecomposition
incolumn3. Thereafterfindtheintegralwithintegrandcolumn3.
P(x)
Partialfractiondecomposition Solution
Q(x)
2x−1
1.
(x+1)(3x+2)
x(x+1)
2.
(x−1)(x−2)
3
3.
x(3x−1)2
1
4.
x3(x+2)
2
5.
(x−1)(x2+1)
x2−x−1
6.
x3−8
x3+1
7.
(x2+1)2
2. Longdivisionfirst
(cid:90)
p(x)
dxanddeg(p(x)) ≥ deg(q(x)) ⇒DoLongDivision
q(x)

44 2nd SemesterCalculusStudyGuide MATH1036
WorkedExample9.5.7. Evaluate
(a)
(cid:90) x3−6x2+5x−3
dx
x2−1
(b)
√
(cid:90)
x
√ dx.
x+1
Tutorial 9.5.1. [C2] §3.4, pp. 308–309: 182–186, 191, 195, 196, 198, 200, 206, 209, 210, 212, 214,
217,218,229,231.

Chapter 10
Improper Integrals
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
skill)
(cid:3)
1. understandthemeaningofanimproperintegral,
(cid:3)
2. identifywhenanintegralisimproper,
(cid:3)
3. evaluateanimproperintegral,
(cid:3)
4. useL’Hoˆpital’sRuleinevaluatinganimproperintegral,
(cid:3)
5. knowwhenanimproperintegralconvergesordiverges,
(cid:3)
6. knowhowtosolvetheexaminableworkedoutproblemsfromthissection.
Recallthatthedefinitionofthedefiniteintegralon[a,b]intermsofRiemannSums
(cid:90)b
(cid:88)n
f(x)dx = lim f(x∗)∆x
n→∞ i
a
i=1
requires the interval [a,b] to be finite. Furthermore, the FTC requires that f be continuous. In this
chapterintegralsareconsideredwhichfailtomeetthesetworequirements.
(cid:90)b
Theintegral f(x)dxiscalledimproperif
a
1. oneorbothofthelimitsofintegrationareinfiniteor
2. f hasafinitenumberofinfinitediscontinuitiesintheinterval[a,b].
Notethat f hasaninfinitediscontinuityatcif
lim f(x) = ±∞ or lim f(x) = ±∞.
x→c− x→c+
45

2nd
| 46   |      |             |     |          | SemesterCalculusStudyGuide |             |     |     |     |     | MATH1036 |
| ---- | ---- | ----------- | --- | -------- | -------------------------- | ----------- | --- | --- | --- | --- | -------- |
| 10.1 | Type | I: Infinite |     | Interval | of                         | Integration |     |     |     |     |          |
DefinitionofImproperIntegralswithInfiniteIntegrationLimits: TypeI
|     |                                  |     |     |     | (cid:90)∞ |     |       | (cid:90)t |     |     |     |
| --- | -------------------------------- | --- | --- | --- | --------- | --- | ----- | --------- | --- | --- | --- |
|     | 1. If f iscontinuouson[a,∞),then |     |     |     | f(x)dx    |     | = lim | f(x)dx.   |     |     |     |
t→∞
|     |     |     |     |     | a         |     |     | a         |     |     |     |
| --- | --- | --- | --- | --- | --------- | --- | --- | --------- | --- | --- | --- |
|     |     |     |     |     | (cid:90)b |     |     | (cid:90)b |     |     |     |
=
|     | 2. If f iscontinuouson(−∞,b],then |     |     |     |     | f(x)dx | lim | f(x)dx. |     |     |     |
| --- | --------------------------------- | --- | --- | --- | --- | ------ | --- | ------- | --- | --- | --- |
t→−∞
|     |                           |     |     |     | −∞        |        |           | t       |               |     |      |
| --- | ------------------------- | --- | --- | --- | --------- | ------ | --------- | ------- | ------------- | --- | ---- |
|     |                           |     |     |     | (cid:90)∞ |        | (cid:90)t |         | (cid:90)∞     |     |      |
|     | iscontinuouson(−∞,∞),then |     |     |     |           |        | =         | f(x)dx+ |               |     | ∈ R. |
|     | 3. If f                   |     |     |     |           | f(x)dx |           |         | f(x)dxforanyt |     |      |
|     |                           |     |     |     | −∞        |        | −∞        |         | t             |     |      |
Inthefirsttwocases,theimproperintegralconvergesifthelimitexists(andisfinite). Inthiscase
|     | (cid:90)t  |       |      | (cid:90)b |     |           |     |     |     |     |     |
| --- | ---------- | ----- | ---- | --------- | --- | --------- | --- | --- | --- | --- | --- |
|     | lim f(x)dx | = Lor | lim  | f(x)dx    | =   | M. Then:  |     |     |     |     |     |
|     | t→∞        |       | t→−∞ |           |     |           |     |     |     |     |     |
|     | a          |       |      | t         |     |           |     |     |     |     |     |
|     | (cid:90)∞  |       |      |           |     | (cid:90)∞ |     |     |     |     |     |
=
|     | f(x)dxconvergestoL,andwewrite |     |     |     |     | f(x)dx    |     | L;  |     |     |     |
| --- | ----------------------------- | --- | --- | --- | --- | --------- | --- | --- | --- | --- | --- |
|     | a                             |     |     |     |     | a         |     |     |     |     |     |
|     | (cid:90)b                     |     |     |     |     | (cid:90)b |     |     |     |     |     |
=
|     | f(x)dxconvergesto |     | M,andwewrite |     |     | f(x)dx |     | M.  |     |     |     |
| --- | ----------------- | --- | ------------ | --- | --- | ------ | --- | --- | --- | --- | --- |
|     | −∞                |     |              |     |     | −∞     |     |     |     |     |     |
Ifthelimitsdonotexist,thentheimproperintegralsdiverge.
|     |     |     |     |     | (cid:90)∞ |     |     |     | (cid:90)t | (cid:90)∞ |     |
| --- | --- | --- | --- | --- | --------- | --- | --- | --- | --------- | --------- | --- |
Inthethirdcase,theimproperintegral f(x)dxdivergesifeither f(x)dxor f(x)dxdiverges.
|                      |           |           |                     |     | −∞  |     |                     |     | −∞  | t   |     |
| -------------------- | --------- | --------- | ------------------- | --- | --- | --- | ------------------- | --- | --- | --- | --- |
|                      | (cid:90)t |           | (cid:90)∞           |     |     |     | (cid:90)∞           |     |     |     |     |
|                      | Ifboth    | f(x)dxand | f(x)dxconverge,then |     |     |     | f(x)dxisconvergent. |     |     |     |     |
|                      | −∞        |           | t                   |     |     |     | −∞                  |     |     |     |     |
| WorkedExample10.1.1. |           |           | (TypeI)             |     |     |     |                     |     |     |     |     |
Determinewhetherthefollowingintegralsareconvergentordivergent.
1.
(cid:90)∞
1
dx.
(x−1)2
2
2.
(cid:90)∞
1
dx.
x−1
2

2nd
| MATH1036 | SemesterCalculusStudyGuide |     |     |     | 47  |
| -------- | -------------------------- | --- | --- | --- | --- |
1
| Remark: | f(x) | = from2totisrevolvedaboutthe |     | x-axis,thenthe |     |
| ------- | ---- | ---------------------------- | --- | -------------- | --- |
Iftheregionunderthegraphof
x−1
volumeofthesolidgenerated(Gabriel’sHorn)is(bytheDiskMethod)
(cid:90)t
1
|     | V = π | dx. |     |     |     |
| --- | ----- | --- | --- | --- | --- |
(x−1)2
2
Theimproperintegral
(cid:90)∞
1
|     | π   | dx  |     |     |     |
| --- | --- | --- | --- | --- | --- |
(x−1)2
2
mayberegardedasthevolumeoftheunboundedsolidobtainedbyrevolving,aboutthex-axis,thegraph
1
=
ofy for x ≥ 2. ByWorkedExample1above
x−1
(cid:90)∞
1
|     | π   | dx = π(1) | = π. |     |     |
| --- | --- | --------- | ---- | --- | --- |
(x−1)2
2
Thisgivesusarathercuriousfactthatalthoughtheareaoftheregionisinfinite,thevolumeofthesolid
ofrevolutionitgeneratesisfinite!
3.
(cid:90)0
xexdx.
−∞
4.
(cid:90)∞
ex
dx.
1+e2x
−∞
ThefollowingtheoremwillbeusefulinChapter11.
Theorem10.1.
|     | (cid:90)∞ |  1    |        |     |     |
| --- | --------- | ------ | ------ | --- | --- |
|     |           | p− | if p > |     |     |
|     | 1         |        | 1      |     |     |
|     | dx =      | 1      |        |     |     |
diverges
xp
|     |     |     | if p ≤ 1. |     |     |
| --- | --- | --- | --------- | --- | --- |
1
=
Proof: If p 1,then
|     | (cid:90)∞ | (cid:90)t |     |     |     |
| --- | --------- | --------- | --- | --- | --- |
|     | 1         | 1         |     |     |     |
|     | dx        | = lim     | dx  |     |     |
|     | xp        | t→∞ x     |     |     |     |
|     | 1         | 1         |     |     |     |
(cid:35)t
= limlnx
t→∞
1
= lim[lnt−ln1]
t→∞
= limlnt
t→∞
=
∞.

2nd
| 48  |     | SemesterCalculusStudyGuide |     |     | MATH1036 |
| --- | --- | -------------------------- | --- | --- | -------- |
(cid:90)∞
1
=
| Thusfor p | 1, dxdiverges. |     |     |     |     |
| --------- | -------------- | --- | --- | --- | --- |
xp
1
| Nowsupposethat | p (cid:44) 1. Then |           |           |     |     |
| -------------- | ------------------ | --------- | --------- | --- | --- |
|                |                    | (cid:90)∞ | (cid:90)t |     |     |
|                |                    | 1         | 1         |     |     |
=
|     |     | dx  | lim dx                   |     |     |
| --- | --- | --- | ------------------------ | --- | --- |
|     |     | xp  | t→∞ xp                   |     |     |
|     |     | 1   | 1                        |     |     |
|     |     |     | (cid:34) x−p+1 (cid:35)t |     |     |
|     |     |     | = lim                    |     |     |
t→∞ −p+1
1
|     |     |     | (cid:34) | (cid:35) |     |
| --- | --- | --- | -------- | -------- | --- |
|     |     |     | t1−p     | 1        |     |
=
|     |     |     | lim −                     |          |     |
| --- | --- | --- | ------------------------- | -------- | --- |
|     |     |     | t→∞ 1− p                  | 1− p     |     |
|     |     |     | (cid:32) (cid:33)(cid:34) | (cid:35) |     |
|     |     |     | 1                         | 1        |     |
=
|     |     |     | lim  | −1 . |     |
| --- | --- | --- | ---- | ---- | --- |
|     |     |     | 1− p | tp−1 |     |
t→∞
1
| If p < 1,then | p−1 < 0sothatast | → ∞, | → ∞. Thusfor | p < 1, |     |
| ------------- | ---------------- | ---- | ------------ | ------ | --- |
tp−1
(cid:90)∞
1
=
dx ∞.
xp
1
Hence,
(cid:90)∞
1
|     |     |     | dxdivergesfor | p < 1. |     |
| --- | --- | --- | ------------- | ------ | --- |
xp
1
1
∞,tp−1
If p > 1,then p−1 > 0sothatast → → ∞andhence → 0. Thusfor p > 1,
tp−1
(cid:90)∞
|     |     |     | (cid:32) (cid:33)(cid:34) | (cid:35) |     |
| --- | --- | --- | ------------------------- | -------- | --- |
|     |     | 1   | 1                         | 1        |     |
|     |     | dx  | = lim                     | −1       |     |
|     |     | xp  | 1−                        | tp−1     |     |
t→∞ p
1
|     |     |     | (cid:32) | (cid:33) |     |
| --- | --- | --- | -------- | -------- | --- |
|     |     |     | 1        | 1        |     |
|     |     |     | =        | −1       |     |
lim
|     |     |     | 1− p t→∞ tp−1 |     |     |
| --- | --- | --- | ------------- | --- | --- |
1
|     |     |     | = (0−1) |     |     |
| --- | --- | --- | ------- | --- | --- |
1− p
1
|     |     |     | = . |     |     |
| --- | --- | --- | --- | --- | --- |
p−1
Hence,
|     |     | (cid:90)∞ |  1    |          |     |
| --- | --- | --------- | ------ | -------- | --- |
|     |     |           | p− | if p > 1 |     |
1
|     |     | dx  | = 1          |     |     |
| --- | --- | --- | ------------ | --- | --- |
|     |     | xp  | diverges |     |     |
if p ≤ 1.
1
| WorkedExample10.1.2. | 1.  |     |     |     |     |
| -------------------- | --- | --- | --- | --- | --- |
(cid:90)∞
1
√
dx.
x
1
2.
(cid:90)∞
1
dx.
x3/2
1

2nd
| MATH1036 |                                                           |              |     | SemesterCalculusStudyGuide |     |     |     |           |           | 49  |
| -------- | --------------------------------------------------------- | ------------ | --- | -------------------------- | --- | --- | --- | --------- | --------- | --- |
| 10.2     | Type                                                      | II: Infinite |     | Discontinuities            |     |     |     |           |           |     |
|          | DefinitionofImproperIntegralswithInfiniteDiscontinuities: |              |     |                            |     |     |     | TypeII    |           |     |
|          |                                                           |              |     |                            |     |     |     | (cid:90)b | (cid:90)t |     |
=
1. If f iscontinuouson[a,b)and f hasaninfinitediscontinuityatb,then f(x)dx lim f(x)dx.
t→b−
|     |     |     |     |     |     |     |     | a         | a         |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --------- | --------- | --- |
|     |     |     |     |     |     |     |     | (cid:90)b | (cid:90)b |     |
=
2. If f iscontinuouson(a,b]and f hasaninfinitediscontinuityata,then f(x)dx lim f(x)dx.
t→a+
|     |     |     |     |     |     |     |     | a   | t   |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
3. If f iscontinuouson[a,b]exceptforsomec ∈ (a,b)atwhich f hasaninfinitediscontinuity,then
|     | (cid:90)b | (cid:90)c |     | (cid:90)b |     |     |     |     |     |     |
| --- | --------- | --------- | --- | --------- | --- | --- | --- | --- | --- | --- |
|     | f(x)dx    | = f(x)dx+ |     | f(x)dx.   |     |     |     |     |     |     |
|     | a         | a         |     | c         |     |     |     |     |     |     |
Inthefirsttwocases,theimproperintegralconvergesifthelimitexists(andisfinite). Inthiscase
|     | (cid:90)t  |     |         | (cid:90)b |     |           |     |     |     |     |
| --- | ---------- | --- | ------- | --------- | --- | --------- | --- | --- | --- | --- |
|     |            | =   |         |           | =   |           |     |     |     |     |
|     | lim f(x)dx |     | Lor lim | f(x)dx    |     | M. Then:  |     |     |     |     |
|     | t→b−       |     | t→a+    |           |     |           |     |     |     |     |
|     | a          |     |         | t         |     |           |     |     |     |     |
|     | (cid:90)b  |     |         |           |     | (cid:90)b |     |     |     |     |
=
|     | f(x)dxconvergestoL,andwewrite |     |     |     |     | f(x)dx    | L;  |     |     |     |
| --- | ----------------------------- | --- | --- | --- | --- | --------- | --- | --- | --- | --- |
|     | a                             |     |     |     |     | a         |     |     |     |     |
|     | (cid:90)b                     |     |     |     |     | (cid:90)b |     |     |     |     |
=
|     | f(x)dxconvergesto |     | M,andwewrite |     |     | f(x)dx | M.  |     |     |     |
| --- | ----------------- | --- | ------------ | --- | --- | ------ | --- | --- | --- | --- |
|     | a                 |     |              |     |     | a      |     |     |     |     |
Ifthelimitsdonotexist,thentheimproperintegralsdiverge.
|     |     |     |     |     | (cid:90)b |     |     | (cid:90)c | (cid:90)b |     |
| --- | --- | --- | --- | --- | --------- | --- | --- | --------- | --------- | --- |
Inthethirdcase,theimproperintegral f(x)dxdivergesifeither f(x)dxor f(x)dxdiverges.
|     |           |           |           |                     | a   |     |                     | a   | c   |     |
| --- | --------- | --------- | --------- | ------------------- | --- | --- | ------------------- | --- | --- | --- |
|     | (cid:90)c |           | (cid:90)b |                     |     |     | (cid:90)b           |     |     |     |
|     | Ifboth    | f(x)dxand |           | f(x)dxconverge,then |     |     | f(x)dxisconvergent. |     |     |     |
|     | a         |           | c         |                     |     |     | a                   |     |     |     |
WorkedExample10.2.1. Determinewhetherthefollowingimproperintegralsconvergeordiverge.
1. Leftendpointinfinitediscontinuity
(cid:90)1
lnxdx.
0
2. Rightendpointinfinitediscontinuity
(a)
(cid:90)1
1
|     |     |     |     |     |     | √   | dx. |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
1−x2
0

2nd
| 50  |     |     |     | SemesterCalculusStudyGuide |     |     |     |     |     | MATH1036 |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------- |
(b)
π
(cid:90)2
secxdx.
0
3. Interiorinfinitediscontinuity
(a)
(cid:90)4
1
dx.
(x−3)2
0
1
=
Solution. Theintegrand isnotdefinedat x 3 ∈ (0,4)andhasaninfinitediscontinuitythere.
(x−3)2
Thus,thegivenintegralhasaninteriorinfinitediscontinuity,henceisimproperofTypeII.Then
|     |     | (cid:90)4 |        |     | (cid:90)3 |     | (cid:90)4 |        |     |     |
| --- | --- | --------- | ------ | --- | --------- | --- | --------- | ------ | --- | --- |
|     |     |           | 1      |     |           | 1   |           | 1      |     |     |
|     |     |           |        | =   |           | dx+ |           |        |     |     |
|     |     |           |        | dx  |           |     |           |        | dx. |     |
|     |     |           | (x−3)2 |     | (x−3)2    |     |           | (x−3)2 |     |     |
|     |     | 0         |        |     | 0         |     | 3         |        |     |     |
The given integral converges if both improper integrals on the right converge. If one of the improper
integralsontherightdiverges,thenthegivenimproperintegraldiverges. Now
|     |     | (cid:90)3 |     |     | (cid:90)t |     |     |     |     |     |
| --- | --- | --------- | --- | --- | --------- | --- | --- | --- | --- | --- |
|     |     | 1         |     |     | 1         |     |     |     |     |     |
=
|     |     |        | dx  | lim |        | dx  |     |     |     |     |
| --- | --- | ------ | --- | --- | ------ | --- | --- | --- | --- | --- |
|     |     | (x−3)2 |     |     | (x−3)2 |     |     |     |     |     |
t→3−
|     |     | 0   |     |     | 0        |           |     |     |     |     |
| --- | --- | --- | --- | --- | -------- | --------- | --- | --- | --- | --- |
|     |     |     |     |     | (cid:34) | (cid:35)t |     |     |     |     |
1
=
|     |     |     |     | lim  | −   |     |     |     |     |     |
| --- | --- | --- | --- | ---- | --- | --- | --- | --- | --- | --- |
|     |     |     |     | t→3− | x−3 |     |     |     |     |     |
0
|     |     |     |     |     | (cid:34) | (cid:32) | (cid:33)(cid:35) |     |     |     |
| --- | --- | --- | --- | --- | -------- | -------- | ---------------- | --- | --- | --- |
|     |     |     |     |     | 1        |          | 1                |     |     |     |
=
|     |     |     |     | lim | −   | − − |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     | t−3 | 0−3 |     |     |     |     |
t→3−
|     |     |     |     |     | (cid:34) | (cid:35) |     |     |     |     |
| --- | --- | --- | --- | --- | -------- | -------- | --- | --- | --- | --- |
|     |     |     |     |     | 1        | 1        |     |     |     |     |
=
|     |     |     |     | lim | −   | −   |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     | t−3 | 3   |     |     |     |     |
t→3−
|     |     |     |     |     |     | (cid:32) |     |       | (cid:33) |     |
| --- | --- | --- | --- | --- | --- | -------- | --- | ----- | -------- | --- |
|     |     |     |     |     |     |          | 1   |       | 3−       |     |
|     |     |     | =   | ∞   |     | ∵        | →   | −∞ast | → .      |     |
t−3
| (cid:90)3 |                            |     |     |     | (cid:90)4 |        |             |     |     |     |
| --------- | -------------------------- | --- | --- | --- | --------- | ------ | ----------- | --- | --- | --- |
| 1         |                            |     |     |     |           |        | 1           |     |     |     |
| Hence,    | dxdivergesandconsequently, |     |     |     |           |        | dxdiverges. |     |     |     |
| (x−3)2    |                            |     |     |     |           | (x−3)2 |             |     |     |     |
| 0         |                            |     |     |     |           | 0      |             |     |     |     |
(cid:90)4
1
Note: There is no need to evaluate dx. Also, the FTC2 cannot apply here. If we did not
(x−3)2
3
identifythattheintegralisimproperwewouldhaveconcludedtheincorrectresult
|     |     | (cid:90)4 |     |     | (cid:35)4 |     |     |     |        |     |
| --- | --- | --------- | --- | --- | --------- | --- | --- | --- | ------ | --- |
|     |     | 1         |     |     | 1         |     | 1   | 4   |        |     |
|     |     |           |     | =   | =         |     | =   |     |        |     |
|     |     |           | dx  | −   |           | −1− | −   |     | WRONG! |     |
|     |     | (x−3)2    |     | x−3 |           |     | 3   | 3   |        |     |
0
0
(b)
(cid:90)7
1
dx.
|     |     |     |     |     | (x+1) | 2   |     |     |     |     |
| --- | --- | --- | --- | --- | ----- | --- | --- | --- | --- | --- |
3
−2

MATH1036 2nd SemesterCalculusStudyGuide 51
Anintegralcanbedoublyimproper,i.e.,itisimproperofTypeIandimproperofTypeII.
Worked Example 10.2.2. (Doubly Improper) Determine whether the following integrals are conver-
gentordivergent.
1.
(cid:90)∞
dx
√ .
x(x+1)
0
2.
(cid:90)∞
1
dx
x+x2
0
Tutorial10.2.1. [C2]Section3.7,pp. 343–344: 347–350,352,365,368,375,380,387,395,399.

| Chapter  | 11        |            |     |
| -------- | --------- | ---------- | --- |
| Infinite | Sequences | and Series |     |
11.1 Sequences
LEARNINGOUTCOMES:
Oncompletionofthissectionyoushould
(cid:3)
1. beabletodistinguishbetweenconvergentanddivergentsequences,
(cid:3)
2. knowthelimitlawsforsequences,
(cid:3)
3. knowtheSqueezeTheoremforsequences,
(cid:3)
4. knowhowtocalculatethelimitofconvergentsequences,
(cid:3)
5. knowthedefinitionsofincreasing,decreasing,monotonicandboundedsequences.
Asequenceisanorderedlistofinfinitelymanynumbers
|     |     | a ,a ,a ,a ,...,a | ,... |
| --- | --- | ----------------- | ---- |
|     |     | 1 2 3 4           | n    |
The number a is called the n-th term of the sequence. The subscript n is called the index. Often, one
n
omitsthegeneraln-thtermandsimplywrites
|     |     | a ,a ,a ,a ,... |     |
| --- | --- | --------------- | --- |
|     |     | 1 2 3 4         |     |
In case of particularly given sequences, the latter notation may be ambiguous, whereas the first one is
| quiteclumsy. Therefore,onealsousesthenotations |     |          |       |
| ---------------------------------------------- | --- | -------- | ----- |
|                                                | {a  | } and {a | }∞    |
|                                                |     | n        | n n=1 |
Note. Theindexofthesequencedoesnothavetostartat1,e.g.,
|                       | {a ,a ,a ,...},                 | {a ,a ,a ,...}, | {a ,a ,a ,...} |
| --------------------- | ------------------------------- | --------------- | -------------- |
|                       | 0 1 2                           | 2 3 4           | 2 4 6          |
| aresequences,saywitha | = n,althoughdifferentsequences. |                 |                |
n
52

2nd
| MATH1036 |     |     |     |     | SemesterCalculusStudyGuide |     |     |     |     |     | 53  |
| -------- | --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | --- |
Inthisexample,eachlinegivesseveraldifferentnotationsforaparticularsequence:
Example11.1.1.
|     | (cid:26) | (cid:27)   | (cid:26) (cid:27)∞ |            | (cid:40) |        | (cid:41) (cid:40) |           |      | (cid:41) |     |
| --- | -------- | ---------- | ------------------ | ---------- | -------- | ------ | ----------------- | --------- | ---- | -------- | --- |
|     |          | n          | n                  |            | 1 2      | 3      |                   | 1 2 3     |      | n        |     |
|     | (a)      | ;          |                    | ;          | ,        | , ,... | ;                 | , , ,..., |      | ,...     |     |
|     |          | n+1        | n+1                | n=1        | 2 3      | 4      |                   | 2 3 4     | n+1  |          |     |
|     | (cid:40) |            | (cid:41)           |            |          |        | (cid:40)          |           |      | (cid:41) |     |
|     |          | (−1)n(n+1) |                    | (−1)n(n+1) |          |        | 2                 | 3         | 4    |          |     |
|     | (b)      |            | ;                  | a =        |          | ;      | −                 | , ,−      | ,... |          |     |
n
|     |          | 5n          |     |     | 5n  |     | 5   | 25 125 |     |         |        |
| --- | -------- | ----------- | --- | --- | --- | --- | --- | ------ | --- | ------- | ------ |
|     |          |             |     |     |     |     |     |        |     |  √     |       |
|     | (cid:26) | nπ(cid:27)∞ |     | nπ  |     |     |     | nπ     |     |  3 1 | nπ  |
|     |          |             |     | =   |     |     | =   | =      |     |         |        |
(c) cos ; a cos ,n ≥ 0; a cos ,n 0,1,2,...; 1, , ,0,...,cos ,...
|     |     | 6   | n   |     | 6   |     | n   | 6   |     |  2 2 | 6  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ------- | ----- |
n=0
Notethatin(c)abovewehavewrittenn ≥ 0toindicatewhichindicesnwetaketobuildthesequence.
Hereitisunderstoodthatindicesareintegers[unlessotherwisestated].
| WorkedExample11.1.2. |            |           |          | Considerthesequences |         |          |           |     |     |     |     |
| -------------------- | ---------- | --------- | -------- | -------------------- | ------- | -------- | --------- | --- | --- | --- | --- |
|                      |            |           |          |                      |         | (cid:40) | (cid:41)∞ |     |     |     |     |
|                      | (cid:26) n | (cid:27)∞ | (cid:26) | n (cid:27)∞          |         | n+1      |           |     |     |     |     |
| (i)                  |            | ,         | (ii)     |                      | , (iii) |          |           | .   |     |     |     |
|                      | n+1        |           | n+1      |                      |         | n+2      |           |     |     |     |     |
|                      |            | n=1       |          | n=0                  |         |          | n=0       |     |     |     |     |
Whichofthesesequencesareidentical?
| WorkedExample11.1.3. |     |     |     | Findthegeneraltermofthesequence |          |      |     |          |      |          |     |
| -------------------- | --- | --- | --- | ------------------------------- | -------- | ---- | --- | -------- | ---- | -------- | --- |
|                      |     |     |     |                                 | (cid:40) |      |     |          |      | (cid:41) |     |
|                      |     |     |     |                                 | 3        | 4    | 1   | 6 7      |      |          |     |
|                      |     |     |     |                                 |          | ,− , | ,−  | ,        | ,... |          |     |
|                      |     |     |     |                                 | 5        | 25   | 25  | 625 3125 |      |          |     |
WorkedExample11.1.4. Manysequencescannoteasilybeguessedfromtheirfirstterms;indeed,only
thesimplestsequenceswithan“obvious”ruleshouldbewrittenin“dots”notation. Trytoguessarule
forthefollowingsequences:
| (i){7,1,8,2,8,1,8,2,8,4,5,...}, |     |     |     |     | (ii){1,1,2,3,5,8,13,21,...}. |     |     |     |     |     |     |
| ------------------------------- | --- | --- | --- | --- | ---------------------------- | --- | --- | --- | --- | --- | --- |
Note. (i)Asequencecanbeidentifiedwithafunctiononthe(positive)integers:
|     |     |     |     |     |     |     | a = | f(n). |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | ----- | --- | --- | --- |
n
(ii)Asequencecanbeplottedaspointsoftherealaxisorasthegraphofthefunction,see(i).
n
=
| BelowisaplotforthesequencefromExample11.1.1(a): |     |     |     |     |     |     |     | a   | n   | .   |     |
| ----------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
n+1
|     |     |     |     |     |     | a   | a   | a   |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     |     | 1   | 2   | 3   |     |     |     |
|     | 0   |     |     |     |     | 1   |     |     |     | 1   |     |
2
a
n
1
n
|     |     | 1 2 3 | 4 5 | 6 7 | 8   |     |     |     |     |     |     |
| --- | --- | ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

2nd
| 54  |     |     |     |     | SemesterCalculusStudyGuide |     |     |     |     | MATH1036 |
| --- | --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------- |
=
Fromtheabovegraphitappearstobeobviousthattheliney 1(denotingtheco-ordinatedirectionof
the a with y) is a horizontal asymptote. That is, for sufficiently large n, a comes as close to 1 as we
|                            | n   |     |     |     |                |     |     |     | n   |     |
| -------------------------- | --- | --- | --- | --- | -------------- | --- | --- | --- | --- | --- |
| want,andwesaythesequence{a |     |     |     |     | }convergesto1. |     |     |     |     |     |
n
Thisisformalizedinthefollowingdefinition:
Definition11.1. Asequence{a n }issaidtoconvergeifthereisanumber Lsuchthata n isascloseto L
| aswelikeforallsufficientlylargen. |     |     |     |     | Wewrite |        |        |     |     |     |
| --------------------------------- | --- | --- | --- | --- | ------- | ------ | ------ | --- | --- | --- |
|                                   |     |     |     |     | lim a = | L or a | → Lasn | → ∞ |     |     |
|                                   |     |     |     |     | n       | n      |        |     |     |     |
n→∞
Asequencewhichdoesnotconvergeissaidtodiverge.
Comparethisdefinitionwiththedefinitionofhorizontalasymptotes,seeCalculusFirstSemesterStudy
Guide[CFSSG],page8.
Theorem11.1. If lim f(x) = Landa = f(n)forintegersn,then lim a = L.
|     |     |     |     |     | n   |     |     |     | n   |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     | x→∞ |     |     |     |     | n→∞ |     |     |
Inparticular,CFFSG,Theorem2.1immediatelygives
Theorem11.2(LimitLaws). Letc ∈ Randsupposethat lim a = Land lim b = M bothexist. Then
|           |          |          |                  |       |          |     |     | n   | n   |     |
| --------- | -------- | -------- | ---------------- | ----- | -------- | --- | --- | --- | --- | --- |
|           |          |          |                  |       |          |     | n→∞ |     | n→∞ |     |
|           |          | +b =     |                  | +     | = L+M.   |     |     |     |     |     |
| 1. lim(a  |          | )        | lim a            | lim   | b        |     |     |     |     |     |
|           | n        | n        |                  | n     | n        |     |     |     |     |     |
| n→∞       |          |          | n→∞              | n→∞   |          |     |     |     |     |     |
|           |          | =        |                  |       | =        |     |     |     |     |     |
| 2. lim(a  |          | −b )     | lim a            | − lim | b L−M.   |     |     |     |     |     |
|           | n        | n        |                  | n     | n        |     |     |     |     |     |
| n→∞       |          |          | n→∞              | n→∞   |          |     |     |     |     |     |
|           |          | =        |                  | =     |          |     |     |     |     |     |
| 3. lim(ca |          | ) c lim  | a                | cL.   |          |     |     |     |     |     |
|           | n        |          | n                |       |          |     |     |     |     |     |
| n→∞       |          | n→∞      |                  |       |          |     |     |     |     |     |
|           |          | (cid:18) | (cid:19)(cid:18) |       | (cid:19) |     |     |     |     |     |
| 4. lim(a  | b        | ) = lim  | a                | lim b | = LM.    |     |     |     |     |     |
|           | n        | n        | n                |       | n        |     |     |     |     |     |
| n→∞       |          | n→∞      |                  | n→∞   |          |     |     |     |     |     |
|           |          |          | lim              | a     |          |     |     |     |     |     |
|           |          | a        |                  | n     | L        |     |     |     |     |     |
|           | (cid:44) |          | n = n→∞          | =     |          |     |     |     |     |     |
| 5. if     | M 0,     | lim      |                  |       | .        |     |     |     |     |     |
|           |          | n→∞ b    | lim              | b     | M        |     |     |     |     |     |
|           |          |          | n                | n     |          |     |     |     |     |     |
n→∞
a n
| 6. if | L (cid:44) 0and | M   | = 0,then | lim       | doesnotexist. |     |     |     |     |     |
| ----- | --------------- | --- | -------- | --------- | ------------- | --- | --- | --- | --- | --- |
|       |                 |     |          | n→∞       | b n           |     |     |     |     |     |
|       |                 |     | (cid:18) | (cid:19)k |               |     |     |     |     |     |
Z+
| 7. ifk | ∈   | , lim ak | = lim | a   | = Lk. |     |     |     |     |     |
| ------ | --- | -------- | ----- | --- | ----- | --- | --- | --- | --- | --- |
|        |     |          | n     | n   |       |     |     |     |     |     |
|        |     | n→∞      | n→∞   |     |       |     |     |     |     |     |
| 8. lim | c = | c.       |       |     |       |     |     |     |     |     |
n→∞
|        |        | √          |     | (cid:113) | √                  |     |     |        |     |     |
| ------ | ------ | ---------- | --- | --------- | ------------------ | --- | --- | ------ | --- | --- |
|        | Z+     |            | =   |           | = kL.              |     |     |        |     |     |
| 9. ifk | ∈      | , lim      | ka  | k lim a   | Ifkiseven,weassume |     |     | L > 0. |     |     |
|        |        |            | n   |           | n                  |     |     |        |     |     |
|        |        | n→∞        |     | n→∞       |                    |     |     |        |     |     |
| 10. if | lim |a | | = 0,then | lim | a =       | 0.                 |     |     |        |     |     |
|        |        | n          |     | n         |                    |     |     |        |     |     |
|        | n→∞    |            | n→∞ |           |                    |     |     |        |     |     |
TheSandwichtheorem,CFSSG,Theorem2.7hasavariantforsequences
|     |     |     |     |     |     |     |     | =   | =   | =   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Theorem11.3(SandwichTheorem). Ifa ≤ b ≤ c and lim a lim c L,then lim b L.
|     |     |     |     |     |     | n n n | n→∞ | n n→∞ | n   | n→∞ n |
| --- | --- | --- | --- | --- | --- | ----- | --- | ----- | --- | ----- |

2nd
| MATH1036 |     |     | SemesterCalculusStudyGuide | 55  |
| -------- | --- | --- | -------------------------- | --- |
Theorem2.3inCFSSGleadsto
| Theorem11.4. | Ifr | > 0,then |     |     |
| ------------ | --- | -------- | --- | --- |
1
=
lim 0.
n→∞ nr
Definition11.2. Ifa becomeslargerthananypositivenumberforsufficientlylargen,i.e.,ifforevery
n
| M > 0thereisaninteger |     | N suchthat |     |     |
| --------------------- | --- | ---------- | --- | --- |
a > M whenever n > N,
n
| thenthesequence{a |     | }issaidtodivergeto∞,andwewrite |     |     |
| ----------------- | --- | ------------------------------ | --- | --- |
n
lim a = ∞.
n
n→∞
| Theorem11.5. | If lim | |a | = ∞,then{a | }diverges. |     |
| ------------ | ------ | --------------- | ---------- | --- |
|              |        | n               | n          |     |
n→∞
Foraproofseeboundedsequencesbelow.
Worked Example 11.1.5. For each of the following sequences, determine if it converges or diverges,
andfindthelimitifitexists.
n
| a   | =   |     |     |     |
| --- | --- | --- | --- | --- |
1. n
n+1
lnn
=
2. a n
n
3. {−1,1,−1,1,−1,1,...}
(−1)n
| 4. a | =   |     |     |     |
| ---- | --- | --- | --- | --- |
n
n
n!
| 5. a | =   |     |     |     |
| ---- | --- | --- | --- | --- |
| n    | nn  |     |     |     |
Forwhichvaluesofrdoesthesequence{rn}converge?
WorkedExample11.1.6.
}∞
| Definition11.3. | Asequence{a |     | iscalled |     |
| --------------- | ----------- | --- | -------- | --- |
n n=1
| increasing | ifa < a | n+1 foralln | ≥ 1, |     |
| ---------- | ------- | ----------- | ---- | --- |
n
| decreasing | ifa > | a foralln | ≥ 1, |     |
| ---------- | ----- | --------- | ---- | --- |
n n+1
| monotonic | ifitiseitherincreasingordecreasing. |     |     |     |
| --------- | ----------------------------------- | --- | --- | --- |
WorkedExample11.1.7. Determineifthefollowingsequencesaredecreasingorincreasing:
|     | (cid:40) (cid:41) |     |     |     |
| --- | ----------------- | --- | --- | --- |
3
1.
n+5
|     | (cid:26) n (cid:27) |     |     |     |
| --- | ------------------- | --- | --- | --- |
2.
2n2−1

2nd
| 56  |     |     | SemesterCalculusStudyGuide |     |     |     | MATH1036 |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------- |
}∞
| Definition11.4. | Asequence{a |     | iscalled |     |     |     |     |
| --------------- | ----------- | --- | -------- | --- | --- | --- | --- |
n n=1
| boundedabove | ifthereisanumber |     | M suchthata |     | ≤ M foralln | ≥ 1, |     |
| ------------ | ---------------- | --- | ----------- | --- | ----------- | ---- | --- |
n
| boundedbelow | ifthereisanumbermsuchthata |     |     |     | ≥ mforalln | ≥ 1, |     |
| ------------ | -------------------------- | --- | --- | --- | ---------- | ---- | --- |
n
| bounded ifitisboundedaboveandbelow. |     |     |     |     |     |     |     |
| ----------------------------------- | --- | --- | --- | --- | --- | --- | --- |
Wewillseeapplicationsofthefollowingimportanttheoreminlatersections.
Theorem11.6(MonotonicSequenceTheorem). Everybounded,monotonicsequenceisconvergent.
Tutorial11.1.1. 1. [C2]§5.1,pp. 447–448: 2,3,5,6,10,12,16,23–29,40,43.
2. AnswerTrueorFalseforthefollowingstatements. IfyouanswerFalse,provideacounterexample.
(a)Aconvergentsequencewillalwaysbemonotonic.
(b)Aboundedsequencewillalwaysconverge.
(c)Ifasequenceisdecreasingandboundeditwillalwaysconverge.
3. WhichofthefollowingisNOTaplotofasequence? Justifyyouranswer.
|     |     | PlotA |     |     |     | PlotC |     |
| --- | --- | ----- | --- | --- | --- | ----- | --- |
8
1
|     |     |     |     |     |     | B I |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
6
0
N
| 0 1 | 2 3 4 | 5 6 | 7   | 8 9 | 10  | C   |     |
| --- | ----- | --- | --- | --- | --- | --- | --- |
4
| −1  |     |     |     |     |     |     | J   |
| --- | --- | --- | --- | --- | --- | --- | --- |
2
A
−2
|     |     |     |     |     | 0   | F          |          |
| --- | --- | --- | --- | --- | --- | ---------- | -------- |
|     |     |     |     |     | 0   | 2 4 6 8 10 | 12 14 16 |
L
−2
|     |     |     |     |     |     | D   | K   |
| --- | --- | --- | --- | --- | --- | --- | --- |
M
G
−4
H
| 2   |     | PlotB |     |     | −6  |     |     |
| --- | --- | ----- | --- | --- | --- | --- | --- |
| 1   |     |       |     |     | −8  |     |     |
| 0   |     |       |     |     |     | E   |     |
−10
| 0 1 | 2 3 4 | 5 6 | 7   |     |     |     |     |
| --- | ----- | --- | --- | --- | --- | --- | --- |
O
| −1  |     |     |     |     | −12 |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
−14
11.2 Series
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
skill)
(cid:3)
1. know how to use the n-th partial sum s n of a series to determine if a series is convergent or
divergent,
(cid:3)
2. beabletocalculatethesumofaconvergentseries,

2nd
| MATH1036 |     |     | SemesterCalculusStudyGuide |     |     | 57  |
| -------- | --- | --- | -------------------------- | --- | --- | --- |
(cid:3)
(cid:80)∞
3. be able to prove the theorem that if the series a is convergent, then limit of the sequence
n
n=1
{a }is0,
(cid:3) n
4. knowhowtoapplythetestfordivergence,
(cid:3)
5. knowthepropertiesofconvergentseries.
| Givenasequence{a | }∞ ,wecanformallyconsidertheexpression |     |     |     |     |     |
| ---------------- | -------------------------------------- | --- | --- | --- | --- | --- |
n n=1
|     |     |     | a +a +a | +···+a | +... |     |
| --- | --- | --- | ------- | ------ | ---- | --- |
|     |     |     | 1 2     | 3      | n    |     |
andcalleditaseries,writtensymbolicallyas
|     |     |     | (cid:88)∞ |     | (cid:88) |     |
| --- | --- | --- | --------- | --- | -------- | --- |
|     |     |     | a         | or  | a .      |     |
|     |     |     | n         |     | n        |     |
n=1
| Buthowdoweaddupinfinitelymanynumbers? |     |     |     | Doesitmakesenseatall? |     |     |
| ------------------------------------- | --- | --- | --- | --------------------- | --- | --- |
Example11.2.1. Considerthesequence{1,−1,1,−1,1,...}. Addingupthefirstnterms,wearriveat
=
|     |     | 1,0,1,0,1,... |     | forn | 1,2,3,4,5,... |     |
| --- | --- | ------------- | --- | ---- | ------------- | --- |
anditdoesnotmakesensetoassignauniquevaluetotheinfinitesum.
However,whatweobtaininthiswayisasequenceofnumbers
(cid:88)n
|     | s = | a +a | +a +···+a | =   | a, n = 1,2,3,... |     |
| --- | --- | ---- | --------- | --- | ---------------- | --- |
|     | n   | 1 2  | 3         | n   | i                |     |
i=1
(cid:88)∞
ofwell-definedsums,called partialsumsoftheseries a . Ifbyaddingmoreandmoretermsofthe
n
n=1
series a certain number is approached, we will assign this number as the value of the series. Formally,
wehavethefollowingdefinition:
|     |     | (cid:88)∞ |     |     | (cid:88)n | (cid:88)∞ |
| --- | --- | --------- | --- | --- | --------- | --------- |
Definition11.5. Givenaseries a ,anddenotingby s = a itsn-thpartialsum,theseries a
|     |     |     | n   |     | n i | n   |
| --- | --- | --- | --- | --- | --- | --- |
|     |     | n=1 |     |     | i=1 | n=1 |
=
issaidtoconvergeifthesequence{s }converges. Inthiscase,thenumber s lim s iscalledthesum
n n
n→∞
oftheseriesandwewrite
(cid:88)∞
=
a n s
n=1
Aserieswhichdoesnotconvergeissaidtodivergeortobedivergent.
(cid:88)∞
Note. 1. Observethat a denotesaseries(convergentordivergent)aswellasitssumifitconverges.
n
n=1
| Aseriesdoesnothavetostartatn |     |     | =                                                       |     |     |     |
| ---------------------------- | --- | --- | ------------------------------------------------------- | --- | --- | --- |
| 2.                           |     |     | 1. Thechangeofnotationisobviousforotherstartingindices. |     |     |     |

58 2nd SemesterCalculusStudyGuide MATH1036
Example11.2.2. Considerthegeometricseries
(cid:88)∞
arn, a (cid:44) 0, r ∈ R.
n=0
Recallthepartialsumsforr (cid:44) 1:
s = a+ar+ar2+···+arn,
n
rs = ar+ar2+···+arn+arn+1.
n
Subtractingtheseequationsgives
s −rs = a−arn+1,
n n
andso
a(1−rn+1)
s = .
n 1−r
ByExample11.1.6,{s }andthusthegeometricseriesconvergesif|r| < 1,with
n
(cid:88)∞
a
arn = lim s = ,
n→∞ n 1−r
n=0
anddivergesif|r| > 1orr = −1. Finally,forr = 1, s = a(n+1),andthus|s | → ∞asn → ∞.
n n
Thuswehaveshown
Theorem11.7. Thegeometricseries
(cid:88)∞
arn, a (cid:44) 0,
n=0
isconvergentif|r| < 1,withsum
(cid:88)∞
a
arn = .
1−r
n=0
If|r| ≥ 1,thegeometricseriesdiverges.
WorkedExample11.2.3. Findthesumofthegeometricseries
10 20 40
5− + − +...
3 9 27
(cid:88)∞
WorkedExample11.2.4. Istheseries 22n31−n convergentordivergent?
n=1
WorkedExample11.2.5. Writethenumber2.317 = 2.3171717... asaratioofintegers.
(cid:88)∞
1
WorkedExample11.2.6. Showthattheseries convergesandfinditssum.
n(n+1)
n=1

2nd
| MATH1036 |     |     | SemesterCalculusStudyGuide |     |     |     |     |     | 59  |
| -------- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | --- |
(cid:88)∞
| Theorem11.8. | Iftheseries |     | a converges,then | lim | a = 0. |     |     |     |     |
| ------------ | ----------- | --- | ---------------- | --- | ------ | --- | --- | --- | --- |
|              |             |     | n                |     | n      |     |     |     |     |
n→∞
n=1
Proof. Let
= +a +···+a
|     |     |     | s   | a   | .   |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     | n   | 1 2 | n   |     |     |     |     |
Then
=
|     |     |     |     | a s −s | .   |     |     |     |     |
| --- | --- | --- | --- | ------ | --- | --- | --- | --- | --- |
n n n−1
(cid:88)∞
| Since a | n converges, |     |     |     |     |     |     |     |     |
| ------- | ------------ | --- | --- | --- | --- | --- | --- | --- | --- |
n=1
lim s = s
n
n→∞
| exists. Sincealson−1 |     | →   | ∞asn → ∞, |     |     |     |     |     |     |
| -------------------- | --- | --- | --------- | --- | --- | --- | --- | --- | --- |
lim s = s.
n−1
n→∞
Hence
|     |     |     | = −s            | =       | −       | = s−s | =   |     |     |
| --- | --- | --- | --------------- | ------- | ------- | ----- | --- | --- | --- |
|     |     | lim | a n lim(s n n−1 | ) lim s | n lim s | n−1   | 0.  |     |     |
|     |     | n→∞ | n→∞             | n→∞     | n→∞     |       |     |     |     |
(cid:88)∞
1
Note. TheconverseofTheorem11.8isnottrue,seetheharmonicseries donelater.
n
n=1
ThecontrapositivestatementtoTheorem11.8isveryuseful:
(cid:88)∞
(cid:44)
Theorem 11.9 (Test for Divergence). If lim a n does not exist or if lim a n 0, then the series a n
|     |     |     | n→∞ |     |     | n→∞ |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
n=1
diverges.
(cid:88)∞
| Note. | a   | =   |     |     |     |     |     | a   |     |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
From lim n 0nothingcanbeconcludedabouttheconvergenceoftheseries n .
n→∞
n=1
(cid:88)∞
n2
| WorkedExample11.2.7. |     |     | Showthattheseries |     | diverges. |     |     |     |     |
| -------------------- | --- | --- | ----------------- | --- | --------- | --- | --- | --- | --- |
5n2+4
n=1
FromTheorem11.2weimmediatelyinfer
|     |     |     |     |     | (cid:88)∞ | (cid:88)∞ |     |     |     |
| --- | --- | --- | --- | --- | --------- | --------- | --- | --- | --- |
Theorem 11.10 (Sum Laws). Let c ∈ R and suppose that a and b both converge. Then also
|                     |           |      |                     |     |     | n   | n   |     |     |
| ------------------- | --------- | ---- | ------------------- | --- | --- | --- | --- | --- | --- |
|                     |           |      |                     |     | n=1 | n=1 |     |     |     |
| (cid:88)∞ (cid:88)∞ |           |      | (cid:88)∞           |     |     |     |     |     |     |
| (ca ),              | (a +b     | )and | (a −b )converge,and |     |     |     |     |     |     |
| n                   | n         | n    | n n                 |     |     |     |     |     |     |
| n=1 n=1             |           |      | n=1                 |     |     |     |     |     |     |
| (cid:88)∞           | (cid:88)∞ |      |                     |     |     |     |     |     |     |
=
| 1. (ca n  | ) c  | a n ,     |           |     |     |     |     |     |     |
| --------- | ---- | --------- | --------- | --- | --- | --- | --- | --- | --- |
| n=1       | n=1  |           |           |     |     |     |     |     |     |
| (cid:88)∞ |      | (cid:88)∞ | (cid:88)∞ |     |     |     |     |     |     |
|           | +b = | +         |           |     |     |     |     |     |     |
| 2. (a     | )    | a         | b ,       |     |     |     |     |     |     |
| n         | n    | n         | n         |     |     |     |     |     |     |
| n=1       |      | n=1       | n=1       |     |     |     |     |     |     |
| (cid:88)∞ |      | (cid:88)∞ | (cid:88)∞ |     |     |     |     |     |     |
=
| 3. (a | −b ) | a − | b , |     |     |     |     |     |     |
| ----- | ---- | --- | --- | --- | --- | --- | --- | --- | --- |
| n     | n    | n   | n   |     |     |     |     |     |     |
| n=1   |      | n=1 | n=1 |     |     |     |     |     |     |

2nd
| 60                   |     |                       | SemesterCalculusStudyGuide |                    |          | MATH1036 |
| -------------------- | --- | --------------------- | -------------------------- | ------------------ | -------- | -------- |
|                      |     |                       |                            | (cid:88)∞ (cid:32) | (cid:33) |          |
|                      |     |                       |                            | 3                  | 1        |          |
| WorkedExample11.2.8. |     | Findthesumoftheseries |                            |                    | + .      |          |
|                      |     |                       |                            | n(n+1)             | 2n       |          |
n=1
Note. For convergence it does not matter at which index the series starts. But it matters for the sum.
Moreprecisely:
(cid:88)∞ (cid:88)∞
Theorem11.11. Letk < mbeintegers. Thentheseries a convergesifandonlyiftheseries a
n n
n=k n=m
converges,and
|     |     |     | (cid:88)∞ m(cid:88)−1 | (cid:88)∞ |     |     |
| --- | --- | --- | --------------------- | --------- | --- | --- |
|     |     |     | a = a                 | + a .     |     |     |
|     |     |     | n                     | n n       |     |     |
|     |     |     | n=k n=k               | n=m       |     |     |
Tutorial11.2.1. [C2]§5.2,pp. 466–467: 67–69,71,72,79–81,83–86,93,94,103,112.
| 11.3 Convergence |     | Tests for | Series |     |     |     |
| ---------------- | --- | --------- | ------ | --- | --- | --- |
LEARNINGOUTCOMES:
Oncompletionofthissectionyoushould
(cid:3)
(cid:88)
1. knowhowtoapplytheIntegralTesttotestifaseries a isconvergentordivergent,
n
(cid:3)
2. knowhowtocompareagivenserieswithaseriesthatisknowntobeconvergentordivergent,
(cid:3)
3. knowhowtodealwithserieswhosetermsarealternatelypositiveandnegative,
(cid:3)
4. knowhowtotestifanalternatingseriesconverges,
(cid:3)
5. beabletodistinguishbetweenserieswhichareabsolutelyconvergentandthosewhicharecon-
ditionallyconvergent,
(cid:3)
6. know the statement of the Absolute Convergence Test which shows that absolute convergence
impliesconvergence,
(cid:3)
7. knowhowtoapplytheRatioTestandtheRootTest.
| 11.3.1 TheIntegralTest |     |     |     |     |     |     |
| ---------------------- | --- | --- | --- | --- | --- | --- |
[1,∞).
Let f be a continuous, positive, decreasing function on Considering lower and upper sums, L
(cid:90)n
| andU,fortheintegral |     | f(x)dx |     |     |     |     |
| ------------------- | --- | ------ | --- | --- | --- | --- |
1
=
|     | y   | y f(x) |     |     |     |     |
| --- | --- | ------ | --- | --- | --- | --- |
x
|     | 0   | 1   | 2   | 3   | 4   | 5   |
| --- | --- | --- | --- | --- | --- | --- |

2nd
| MATH1036 |     |     |     |     |     | SemesterCalculusStudyGuide |     |     |     | 61  |
| -------- | --- | --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- |
itfollowsthat
(cid:90)n
|     |     |     |     |     | (cid:88)n |       |        |     | (cid:88)n−1 |     |
| --- | --- | --- | --- | --- | --------- | ----- | ------ | --- | ----------- | --- |
|     |     |     |     |     | f(i)      | = L ≤ | f(x)dx | ≤   | U = f(i).   |     |
|     |     |     |     |     | i=2       |       |        |     | i=1         |     |
1
UsingTheorem11.11andtheMonotonicSequenceTheorem,onecanshowthat
Theorem11.12(IntegralTest). Let f beacontinuous, positive, decreasingfunctionon[1,∞)andlet
(cid:90)∞
(cid:88)∞
a = f(n). Thentheseries a convergesifandonlyiftheintegral f(x)dxconverges.
| n   |     |     |     |     | n   |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
n=1
1
Note. Wecanstarttheseriesortheintegralatanysuitableinteger. Inparticular, f onlyhastobepositive
anddecreasingforsufficientlylarge
x.
(cid:88)∞
1
| WorkedExample11.3.1. |     |     |     | Testtheseries |     |     |     | forconvergence. |     |     |
| -------------------- | --- | --- | --- | ------------- | --- | --- | --- | --------------- | --- | --- |
n2+1
n=1
(cid:88)∞
1
Theorem 11.13 (p-series Test). Let p ∈ R. The p-series converges if p > 1 and diverges if
np
n=1
p ≤ 1.
1
| Proof. | If p | ≤ 0then |     | (cid:54)→ 0asn | →   | ∞,sothe | p-seriesdoesnotconverge. |     |     |     |
| ------ | ---- | ------- | --- | -------------- | --- | ------- | ------------------------ | --- | --- | --- |
np
1
=
If p > 0, then f(x) iscontinuous, positive, anddecreasing. SotheIntegralTestisapplicable. By
xp
(cid:90)∞
dx
| Theorem10.1, |     |     | convergesifandonlyif |     |     |     | p > 1,andtheresultfollows. |     |     |     |
| ------------ | --- | --- | -------------------- | --- | --- | --- | -------------------------- | --- | --- | --- |
xp
1
WorkedExample11.3.2. Determinewhetherthefollowingseriesconverge:
|     | (cid:88)∞ |      | (cid:88)∞ |     | (cid:88)∞ |      |     |     |     |     |
| --- | --------- | ---- | --------- | --- | --------- | ---- | --- | --- | --- | --- |
|     | 1         |      | 1         |     |           | 1    |     |     |     |     |
| (i) | ,         | (ii) |           | ,   | (iii)     |      | .   |     |     |     |
|     | n3        |      |           | 1   |           | nlnn |     |     |     |     |
|     | n=1       |      | n=1 n     | 3   | n=2       |      |     |     |     |     |
(cid:88)∞
|     |     |     |     | 1   |     | 1   |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
=
| Note. | For0 | < p ≤ | 1, lim |     | 0,but |     | diverges. |     |     |     |
| ----- | ---- | ----- | ------ | --- | ----- | --- | --------- | --- | --- | --- |
|       |      |       | n→∞    | np  |       | np  |           |     |     |     |
n=1
|                                  |     |     |     |     |     | 1 1 | 1    |           |     |     |
| -------------------------------- | --- | --- | --- | --- | --- | --- | ---- | --------- | --- | --- |
| Inparticular,theharmonicseries1+ |     |     |     |     |     | + + | +... | diverges. |     |     |
|                                  |     |     |     |     |     | 2 3 | 4    |           |     |     |
Tutorial11.3.1. [C2]§5.3,pp. 482–483: 138,140,141,152,153,156,157,161,163–165,183.
| 11.3.2 | TheComparisonTest |     |     |     |     |          |     |          |     |     |
| ------ | ----------------- | --- | --- | --- | --- | -------- | --- | -------- | --- | --- |
|        |                   |     |     |     |     | (cid:80) |     | (cid:80) |     |     |
Theorem11.14(ComparisonTest). Let a and b beserieswithpositiveterms.
|        |                 |              |     |       |                    |     | n   | n             |            |     |
| ------ | --------------- | ------------ | --- | ----- | ------------------ | --- | --- | ------------- | ---------- | --- |
|        | (cid:80)        |              |     |       |                    |     |     | (cid:80)      |            |     |
| (i)If  | b convergesanda |              |     | ≤     | b foralln,thenalso |     |     | a             | converges. |     |
|        | n               |              |     | n     | n                  |     |     | n             |            |     |
|        | (cid:80)        |              |     |       |                    |     |     | (cid:80)      |            |     |
| (ii)If | b n             | divergesanda |     | n ≥ b | n foralln,thenalso |     |     | a n diverges. |            |     |
Note. The most common series with known convergence behaviour to compare with are p-series and
geometricseries.

2nd
| 62  |     | SemesterCalculusStudyGuide |     |     |     | MATH1036 |     |
| --- | --- | -------------------------- | --- | --- | --- | -------- | --- |
WorkedExample11.3.3. Determinewhetherthefollowingseriesconverge:
| (cid:88)∞ | (cid:88)∞ |     |     |     |     |     |     |
| --------- | --------- | --- | --- | --- | --- | --- | --- |
|           | 5         | lnn |     |     |     |     |     |
| (i)       | , (ii)    | .   |     |     |     |     |     |
2n2+4n+3
n
| n=1             | n=1                                       |           |     |     |     |     |     |
| --------------- | ----------------------------------------- | --------- | --- | --- | --- | --- | --- |
| Tutorial11.3.2. | 1. [C2]§5.3,pp.                           | 482: 139. |     |     |     |     |     |
| 2. [C2]§5.4,pp. | 493–494: 195,197,198,201,202,206,236–240. |           |     |     |     |     |     |
| 11.3.3          | AlternatingSeries                         |           |     |     |     |     |     |
Analternatingseriesisaseriesoftheform
(cid:88)∞ (cid:88)∞
|     | (−1)nb |     | (−1)n−1b |       |      |     |     |
| --- | ------ | --- | -------- | ----- | ---- | --- | --- |
|     |        | or  |          | withb | > 0, |     |     |
|     |        | n   |          | n     | n    |     |     |
n=1 n=1
thatis,thetermsoftheseriesarealternatelypositiveornegative. Forexample,
(cid:88)∞
|     |     | 1 1 1 |        | (−1)n−1 |     |     |     |
| --- | --- | ----- | ------ | ------- | --- | --- | --- |
|     |     | +     | +··· = |         |     |     |     |
|     |     | 1− −  |        |         | .   |     |     |
|     |     | 2 3 4 |        | n       |     |     |     |
n=1
|     |     |     |     | (cid:88)∞ | (cid:88)∞ |          |     |
| --- | --- | --- | --- | --------- | --------- | -------- | --- |
|     |     |     |     |           | (−1)nb    | (−1)n−1b |     |
Theorem11.15(Alternatingseriestest). Ifthealternatingseries or satisfies
|          |            |     |     |     | n   | n   |     |
| -------- | ---------- | --- | --- | --- | --- | --- | --- |
|          |            |     |     | n=1 | n=1 |     |     |
| (i)b ≥   | b foralln, |     |     |     |     |     |     |
| n        | n+1        |     |     |     |     |     |     |
| (ii) lim | b = 0,     |     |     |     |     |     |     |
n
n→∞
thentheseriesconverges.
Note. lim b = 0isnecessarybyTheorem11.9since lim(−1)nb = 0 ⇔ lim b = 0 ⇔ lim(−1)n−1b =
|     | n   |     |     | n   | n   |     | n   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| n→∞ |     |     | n→∞ |     | n→∞ | n→∞ |     |
0.
| Example11.3.4. | Thealternatingharmonicseries |     |     |     |     |     |     |
| -------------- | ---------------------------- | --- | --- | --- | --- | --- | --- |
(cid:88)∞ (−1)n−1
|     |     | 1 1 1  |        |     |     |     |     |
| --- | --- | ------ | ------ | --- | --- | --- | --- |
|     |     | 1− + − | +··· = |     |     |     |     |
n
|     |     | 2 3 4 |     |     |     |     |     |
| --- | --- | ----- | --- | --- | --- | --- | --- |
n=1
|     | 1 1 | 1   |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
satisfies(i) > and(ii) lim = 0. HencetheseriesconvergesbytheAlternatingSeriesTest.
|     | n n+1 | n→∞ n |     |     |     |     |     |
| --- | ----- | ----- | --- | --- | --- | --- | --- |
(cid:88)∞
(−1)n−1b
| Example11.3.5. | Thealternatingseries |     | with |     |     |     |     |
| -------------- | -------------------- | --- | ---- | --- | --- | --- | --- |
n
n=1

1
 ifnisodd,
n
b =
|     |     | n  |     |     |     |     |     |
| --- | --- | --------- | --- | --- | --- | --- | --- |
1
ifniseven.
n2
satisfies (ii) but not (i). Note that the series of the terms with even indices is the negative of the p-
series for p = 2 and thus converges, whereas the series of the odd terms is the divergent harmonic
series. Note that filling up a series with zeros does not change its convergence behaviour. Since the
sum of a convergent and a divergent series is divergent (this follows by proof by contradiction from
(cid:88)∞
(−1)n−1b
| Theorem11.10), |     | diverges. |     |     |     |     |     |
| -------------- | --- | --------- | --- | --- | --- | --- | --- |
n
n=1

2nd
| MATH1036 |     | SemesterCalculusStudyGuide |     | 63  |
| -------- | --- | -------------------------- | --- | --- |
(cid:88)∞
3n
Example11.3.6. Thealternatingseries (−1)n−1 doesnotconvergesince
4n−1
n=1
3n 3
lim = (cid:44) 0
n→∞ 4n−1 4
andthus(ii)isnotsatisfied,whichisnecessaryforconvergence. Seethenotefollowingthestatementof
theAlternatingSeriesTest.
(cid:88)∞ n2
WorkedExample11.3.7. Findwhethertheseries (−1)n−1 isconvergent.
n3+1
n=1
| 11.3.4 AbsoluteConvergenceandtheRatioandRootTests |     |          |     |          |
| ------------------------------------------------- | --- | -------- | --- | -------- |
|                                                   |     | (cid:80) |     | (cid:80) |
Definition11.6. Aseries a iscalledabsolutelyconvergentiftheseriesofitsabsolutevalues |a |
|     |     | n   |     | n   |
| --- | --- | --- | --- | --- |
converges.
| Example11.3.8. | Theseries |     |     |     |
| -------------- | --------- | --- | --- | --- |
(cid:88)∞ (−1)n
n2
n=1
isabsolutelyconvergentsince
(cid:88)∞ (cid:12) (cid:12)(−1)n(cid:12) (cid:88)∞
(cid:12) 1
(cid:12) (cid:12) =
(cid:12) (cid:12)
(cid:12) n2 (cid:12) n2
n=1 n=1
| isaconvergent | p-series(p | = 2). |     |     |
| ------------- | ---------- | ----- | --- | --- |
(cid:80)
Definition 11.7. A series a is called conditionally convergent if it is convergent but not absolutely
n
convergent.
|     |     |     | (cid:88)∞ (−1)n (cid:88)∞ |     |
| --- | --- | --- | ------------------------- | --- |
1
Example 11.3.9. The alternating harmonic series is conditionally convergent since is
n n
|     |     |     | n=1 n=1 |     |
| --- | --- | --- | ------- | --- |
divergent.
(cid:80)
Theorem11.16. Ifaseries a n isabsolutelyconvergent,thenitisconvergent.
| Tutorial11.3.3. | [C2]§5.5,p. | 505: 250,252,253,260,262. |     |     |
| --------------- | ----------- | ------------------------- | --- | --- |
(cid:88)∞
sinn
WorkedExample11.3.10. Determinewhethertheseries isconvergent.
n2
n=1
(cid:12) (cid:12)
(cid:12) a (cid:12) (cid:88) ∞
(cid:12) n+ 1 (cid:12) =
Theorem11.17(RatioTest). (i)If l im (cid:12) (cid:12) L < 1,thentheseries a convergesabsolutely,
|     |     | → ∞ (cid:12) | a (cid:12) n |     |
| --- | --- | ------------ | ------------ | --- |
|     |     | n            | n =1         |     |
n
|             | (cid:12) (cid:12)                         |     | ∞           |     |
| ----------- | ----------------------------------------- | --- | ----------- | --- |
|             | (cid:12) a n+ (cid:12)                    |     | (cid:88)    |     |
| (ii)If l im | (cid:12) 1 (cid:12) = L > 1,thentheseries |     | a diverges, |     |
|             | (cid:12) (cid:12)                         |     | n           |     |
| n → ∞       | (cid:12) a (cid:12)                       |     |             |     |
|             | n                                         |     | n =1        |     |
(cid:12) (cid:12) (cid:88) ∞
(cid:12) (cid:12) a n+ 1 (cid:12) (cid:12)
(iii)If l im (cid:12) (cid:12) = L = 1,thennoconclusionaboutconvergenceoftheseries a canbedrawnfron
(cid:12) (cid:12) n
| n → ∞ | a n |     |     |     |
| ----- | --- | --- | --- | --- |
n =1
theRatioTest.

2nd
| 64  |     |     | SemesterCalculusStudyGuide |     |     |     |     | MATH1036 |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------- |
rn
Note. The Ratio Test is useful if the n-th term contains many factors, including factors of the form
andn!. Ifitcontainsonlyfactorsoftheformnp,thenitisnormallynotsuccessful.
|     |     |     |     | (cid:88)∞ | n3  |     |     |     |
| --- | --- | --- | --- | --------- | --- | --- | --- | --- |
(−1)n
| WorkedExample11.3.11. |     |     | Determineiftheseries |     |     | converges. |     |     |
| --------------------- | --- | --- | -------------------- | --- | --- | ---------- | --- | --- |
3n
n=1
(cid:88)∞
nn
| WorkedExample11.3.12. |     |     | Determineiftheseries |     | converges. |     |     |     |
| --------------------- | --- | --- | -------------------- | --- | ---------- | --- | --- | --- |
n!
n=1
(cid:88)∞
√
Theorem11.18( n-thRootTest). (i)If lim n|a | = L < 1,thentheseries a convergesabsolutely,
|     |     |     |     | n   |     |     | n   |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
n→∞
n=1
|     | √   |     |     | (cid:88)∞ |     |     |     |     |
| --- | --- | --- | --- | --------- | --- | --- | --- | --- |
=
| (ii)If lim | n|a | | L > 1,thentheseries |     | a diverges, |     |     |     |     |
| ---------- | ----- | ------------------- | --- | ----------- | --- | --- | --- | --- |
|            | n     |                     |     | n           |     |     |     |     |
n→∞
n=1
(cid:88)∞
√
n|a | = =
(iii)If lim n L 1,thennoconclusionaboutconvergenceoftheseries a n canbedrawnfrom
n→∞
n=1
theRootTest.
| Theroottestismostusefulifa |     |     | contains(only)n-thpowers. |     |     |     |     |     |
| -------------------------- | --- | --- | ------------------------- | --- | --- | --- | --- | --- |
n
|                       |     |     |                      | (cid:88)∞ | (cid:32) 2n+3 | (cid:33)n  |     |     |
| --------------------- | --- | --- | -------------------- | --------- | ------------- | ---------- | --- | --- |
| WorkedExample11.3.13. |     |     | Determineiftheseries |           |               | converges. |     |     |
3n+2
n=1
| Tutorial11.3.4.                 | 1.       | [C2]§5.5,p.                          | 505: 255. |     |     |     |     |     |
| ------------------------------- | -------- | ------------------------------------ | --------- | --- | --- | --- | --- | --- |
| 2. [C2]§5.6,p.                  | 522–523: | 317–319,322,328,330,335,338,341,346. |           |     |     |     |     |     |
| 11.3.5 StrategyforTestingSeries |          |                                      |           |     |     |     |     |     |
Therearenostraightforwardrulesastowhichtesttoapplyinordertodetermineconvergenceordiver-
genceofaseries. However,theshapeofthen-thtermmaygiveaneducatedguesswhichtestmaywork.
Note that more than one convergence test may work, or none of those we have learnt. Here is a list of
patternsandsuggestedtests.
|                   |     |           |                         |     |     |     |     |     |
| ----------------- | --- | --------- | ------------------------- | --- | --- | --- | --- | --- |
|                   |     | (cid:88)∞ |  (cid:88)∞  |     |     |     |     |     |
| Considertheseries |     | a         | a .                       |     |     |     |     |     |
|                   |     | n         | n                         |     |     |     |     |     |
|                   |     | n=1       | n=k                       |     |     |     |     |     |
(cid:44)
| 1. Lookoutfor |     | lim a | 0. ThenapplytheDivergenceTest. |     |     |     |     |     |
| ------------- | --- | ----- | ------------------------------ | --- | --- | --- | --- | --- |
|               |     | n→∞ n |                                |     |     |     |     |     |
1
(cid:80)
| 2. Iftheseriesisoftheform |     |     | ,usethe | p-seriestest. |     |     |     |     |
| ------------------------- | --- | --- | ------- | ------------- | --- | --- | --- | --- |
np
(cid:80)
3. Iftheseriesisoftheform arn,itisageometricseries,whichconvergesifandonlyif|r| < 1.
4. For rational functions and roots of rational functions, consider “highest powers”, which should
| givea | p-series,andthenapplytheComparisonTest. |     |          |          |     |     |     |     |
| ----- | --------------------------------------- | --- | -------- | -------- | --- | --- | --- | --- |
|       |                                         |     | (cid:80) | (cid:80) |     |     |     |     |
5. If the series is of the form (−1)nb or (−1)n−1b with positive b , then try the Alternating
|     |     |     |     | n   | n   |     | n   |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
SeriesTest.
6. Ifa containsfactorialsorn-thpowers,theRatioTestmaybesuccessful.
n
= )n,theRootTestmaygivearesult.
| 7. Ifa | (b  |     |     |     |     |     |     |     |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- |
n n
8. Casesforthe p-seriesTestarenormallyinconclusivewiththeRatioandRootTests;inparticular
| ifa | isarationalfunctionofn,theRootandRatioTestareinconclusive. |     |     |     |     |     |     |     |
| --- | ---------------------------------------------------------- | --- | --- | --- | --- | --- | --- | --- |
n

2nd
| MATH1036 |     | SemesterCalculusStudyGuide |     |     | 65  |
| -------- | --- | -------------------------- | --- | --- | --- |
(cid:82)∞
=
9. If a f(n) with a function f for which the convergence behaviour of f(x)dx can be found,
n 1
theIntegralTestmayapply.
| WorkedExample11.3.14. | Completethefollowingtable. |     |        |     |     |
| --------------------- | -------------------------- | --- | ------ | --- | --- |
| Series                | SuggestedTest              |     | Reason |     |     |
(cid:88)∞
n−1
2n−1
n=1
√
(cid:88)∞
n3+1
3n3+4n2+2
n=1
(cid:88)∞
ne−n2
n=1
| (cid:88)∞ n3 |     |     |     |     |     |
| ------------ | --- | --- | --- | --- | --- |
(−1)n
n4+1
n=1
(cid:88)∞
2n
n!
n=1
(cid:88)∞
1
2+3n
n=1
| Tutorial11.3.5. | 1. [C2]§5.6,p. | 523–524: 348-350,354,355,374. |     |     |     |
| --------------- | -------------- | ----------------------------- | --- | --- | --- |
379–382,388,390,393,395,398,∗401–404.
| 2. [C2],pp. 529–530: |        |     |     |     |     |
| -------------------- | ------ | --- | --- | --- | --- |
| 11.4 Power           | Series |     |     |     |     |
LEARNINGOUTCOMES:
Oncompletionofthissectionyoushould
(cid:3)
|                                            |     |     | (cid:88)∞ | (cid:88)∞ |     |
| ------------------------------------------ | --- | --- | --------- | --------- | --- |
|                                            |     |     | xn        | (x−a)n,   |     |
| 1. beabletorecognizetheformofapowerseries: |     |     | c         | or c      |     |
|                                            |     |     | n         | n         |     |
| (cid:3)                                    |     |     | n=0       | n=0       |     |
2. knowhowtoapplythetestsforconvergencetocalculatethevaluesofxforwhichagivenpower
seriesconverges,
(cid:3)
3. knowhowtocalculatetheradiusandintervalofconvergence.
Aseries
(cid:88)∞
c (x−a)n
n
n=0
iscalledapowerseriesin(x−a)orapowerseriescenteredataorapowerseriesabouta.
| Notethat(x−a)0 | = 1. Ifa = | 0,thepowerseriessimplifiesto |     |     |     |
| -------------- | ---------- | ---------------------------- | --- | --- | --- |
(cid:88)∞
c xn.
n
n=0
x = a,alltermsfromthesecondonwardsare0,sotheseriesconvergestoc x = a.
For 0 for

2nd
| 66  |     | SemesterCalculusStudyGuide |     |     | MATH1036 |
| --- | --- | -------------------------- | --- | --- | -------- |
Note that if a power series converges (for more than one x), then it represents a function of x. Two
naturalquestionsarise:
| • Forwhich | xdoestheseriesconverge? |     |     |     |     |
| ---------- | ----------------------- | --- | --- | --- | --- |
• Hastheseriesa“closedform”representation?
| Example11.4.1. | Thegeometricseries |     |     |     |     |
| -------------- | ------------------ | --- | --- | --- | --- |
(cid:88)∞
xn
n=0
| convergesif−1 | < x < 1anddivergesotherwise,seeTheorem11.7. |     |     |     |     |
| ------------- | ------------------------------------------- | --- | --- | --- | --- |
(cid:88)∞
| WorkedExample11.4.2. |                  |     | xdoestheseries | n!xn      |     |
| -------------------- | ---------------- | --- | -------------- | --------- | --- |
|                      | Forwhichvaluesof |     |                | converge? |     |
n=0
WorkedExample11.4.3. Forwhichvaluesof xdoestheBesselfunctionoforder0definedby
(cid:88)∞
(−1)nx2n
=
|     |     | J 0 | (x) |     |     |
| --- | --- | --- | --- | --- | --- |
22n(n!)2
n=0
converge?
(cid:88)∞
(x−3)n
WorkedExample11.4.4. Forwhichvaluesof xdoestheseries converge?
n
n=1
(cid:88)∞
Theorem11.19. Therearethreealternativesforthedomainofapowerseries c (x−a)n:
n
n=0
| (i)Theseriesconvergesonlyfor |     | x = a. |     |     |     |
| ---------------------------- | --- | ------ | --- | --- | --- |
R.
| (ii)Theseriesconvergesforall |     | x ∈ |     |     |     |
| ---------------------------- | --- | --- | --- | --- | --- |
(iii)ThereisR > 0suchthattheseriesconvergesif|x−a| < Randdivergesif|x−a| > R.
The number R in case (iii) is called the radius of convergence. It is convenient to put the radius of
| convergenceasR | = 0in(i)andR | = ∞in(ii). |     |     |     |
| -------------- | ------------ | ---------- | --- | --- | --- |
+
Note that (iii) says that the series converges for x in the interval (a − R,a R) and diverges outside
[a−R,a+R]. For x = a−Rand x = a+Ranythingcanhappen. Inanycase,thedomainoftheseries
isaninterval,calledtheintervalofconvergence,andfor0 < R < ∞,therearefourpossibilitiesforthe
intervalofconvergence:
|     | (a−R,a+R), | (a−R,a+R], | [a−R,a+R), | [a−R,a+R]. |     |
| --- | ---------- | ---------- | ---------- | ---------- | --- |
Note that the Ratio and Root Tests fail at the endpoints of the interval of convergence, and other tests
havetobeused.
WorkedExample11.4.5. Findtheradiusofconvergenceandtheintervalofconvergencefortheseries
(cid:88)∞
(−3)nxn
| 1.  | √   |     |     |     |     |
| --- | --- | --- | --- | --- | --- |
n3+1
n=0
(cid:88)∞ n(x+2)n
2.
3n+1
n=0

2nd
| MATH1036 |     |     |     | SemesterCalculusStudyGuide |     |     |     | 67  |
| -------- | --- | --- | --- | -------------------------- | --- | --- | --- | --- |
Belowisasummaryoftheexamplesofthissection.
|     |     | Series |     | Radiusofconvergence |     | Intervalofconvergence |     |     |
| --- | --- | ------ | --- | ------------------- | --- | --------------------- | --- | --- |
(cid:88)∞
| Geometricseries |     | xn  |     |     | R = 1 |     | (−1,1) |     |
| --------------- | --- | --- | --- | --- | ----- | --- | ------ | --- |
n=0
(cid:88)∞
| Example11.4.2 |     | n!xn |     |     | R = 0 |     | {0} |     |
| ------------- | --- | ---- | --- | --- | ----- | --- | --- | --- |
n=0
(cid:88)∞
(−1)nx2n
=
| Besselfunction | J   |          |     |     | R ∞ |     | (−∞,∞) |     |
| -------------- | --- | -------- | --- | --- | --- | --- | ------ | --- |
|                | 0   | 22n(n!)2 |     |     |     |     |        |     |
n=0
(cid:88)∞ (x−3)n
| Example11.4.4 |     |     |     |     | R = 1 |     | [2,4) |     |
| ------------- | --- | --- | --- | --- | ----- | --- | ----- | --- |
n
n=0
|                 |     | (cid:88)∞ (−3)nxn |      |     |     |     | (cid:34) (cid:35) |     |
| --------------- | --- | ----------------- | ---- | --- | --- | --- | ----------------- | --- |
|                 |     |                   |      |     | 1   |     | 1 1               |     |
| Example11.4.5.1 |     | √                 |      |     | R = |     | − ,               |     |
|                 |     |                   | n3+1 |     | 3   |     | 3 3               |     |
n=0
(cid:88)∞
n(x+2)n
| Example11.4.5.2 |     |     |     |     | R = 3 |     | (−5,1) |     |
| --------------- | --- | --- | --- | --- | ----- | --- | ------ | --- |
3n+1
n=0
Tutorial11.4.1. [C2]§6.1,pp. 541–543: 1-5,7,8,10,12-14,17,21,48,49,51.
| 11.5 Representations |     |     | of  | Functions | as Power | Series |     |     |
| -------------------- | --- | --- | --- | --------- | -------- | ------ | --- | --- |
LEARNINGOUTCOMES:
Oncompletionofthissectionyoushould
(cid:3)
1. knowhowtorepresentcertaintypesoffunctionsassumsofpowerseries,
(cid:3)
2. knowhowtodifferentiateandintegratepowerseriesterm-by-term.
Recallthat
(cid:88)∞
1
|     |     |     |     |     | = xn, |     |     |     |
| --- | --- | --- | --- | --- | ----- | --- | --- | --- |
|x| < 1
1−x
n=0
andthatthegeometricseriesconvergesexactlyfor|x| < 1(i.e.,onlyvalidin(−1,1)).
(cid:88)∞
1
xn).
WorkedExample11.5.1. Express asasumofapowerseriesabout0(i.e.,as c
1+x2 n
n=0
| Solution. Replace | xby−x2 |     | inthegeometricseries: |           |            |                  |     |     |
| ----------------- | ------ | --- | --------------------- | --------- | ---------- | ---------------- | --- | --- |
|                   |        |     |                       | (cid:88)∞ | (cid:88)∞  |                  |     |     |
|                   | 1      |     | 1                     |           |            |                  |     |     |
|                   |        | =   |                       | = (−x2)n  | = (−1)nx2n | = 1−x2+x4−x6+... |     |     |
1+x2 1−(−x2)
|     |     |     |     | n=0 | n=0 |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
x2|
This series converges for |− < 1, i.e., |x| < 1. Hence the radius of convergence is 1 and interval of
convergenceis(−1,1).

2nd
| 68  |     |     |     |     |     | SemesterCalculusStudyGuide |     |     |     |     |     | MATH1036 |
| --- | --- | --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------- |
Findapowerseriesrepresentationfor1/(x+2)about0.
WorkedExample11.5.2.
x3/(x+2)about0.
| WorkedExample11.5.3. |     |     |     | Findapowerseriesrepresentationfor |     |     |     |     |     |     |     |     |
| -------------------- | --- | --- | --- | --------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
(cid:88)∞
Theorem11.20. Ifthepowerseries c (x−a)n hasradiusofconvergenceR > 0,thenthefunction f
n
n=0
definedby
(cid:88)∞
|     |     |     |     | =    |     | (x−a)n | =   | +c (x−a)+c |     | (x−a)2+... |     |     |
| --- | --- | --- | --- | ---- | --- | ------ | --- | ---------- | --- | ---------- | --- | --- |
|     |     |     |     | f(x) | c   |        | c   |            |     |            |     |     |
|     |     |     |     |      | n   |        | 0   | 1          | 2   |            |     |     |
n=0
isdifferentiable(andthuscontinuous)ontheinterval(a−R,a+R),and
(cid:88)∞
|     | f(cid:48)(x) | =   | (x−a)n−1 |     | = +2c | (x−a)+3c |     | (x−a)2+..., |     |     |     |     |
| --- | ------------ | --- | -------- | --- | ----- | -------- | --- | ----------- | --- | --- | --- | --- |
| (i) |              |     | nc       |     | c     |          |     |             |     |     |     |     |
|     |              |     | n        |     | 1     | 2        |     | 3           |     |     |     |     |
n=1
|      | (cid:90) |     |     | (cid:88)∞ | (x−a)n+1 |      |         |     |        |        |      |     |
| ---- | -------- | --- | --- | --------- | -------- | ---- | ------- | --- | ------ | ------ | ---- | --- |
|      |          |     |     |           |          |      |         |     | (x−a)2 | (x−a)3 |      |     |
| (ii) | f(x)dx   |     | =C+ | c         |          | =C+c | (x−a)+c |     |        | +c     | +... |     |
|      |          |     |     | n         | n+1      |      | 0       |     | 1      | 2      |      |     |
|      |          |     |     |           |          |      |         |     | 2      | 3      |      |     |
n=0
Theradiiofconvergenceofthepowerseriesin(i)and(ii)areR.
Theorem11.20saysthatapowerseriescanbedifferentiatedandintegratedtermbyterm.
| Note. |     |     |     |     |     |     |     |     |     |     |     | Thisis |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ------ |
seenbyrewriting(i)and(ii)thereintheform
|       |            |                  |        |                  |                    |           |     |     |     |     |     |     |
| ----- | ---------- | ----------------- | ------ | ----------------- | ------------------ | --------- | --- | --- | --- | --- | --- | --- |
|       | d          |  (cid:88)∞ |        |  (cid:88)∞ | d                  |           |     |     |     |     |     |     |
|       |            |                   | (x−a)n | =                 |                    | (x−a)n],  |     |     |     |     |     |     |
| (iii) |            | c                 |        |                   | [c                 |           |     |     |     |     |     |     |
|       | d x        |                   | n      |                   | d x                | n         |     |     |     |     |     |     |
|       |            | n=0               |        |                   | n=1                |           |     |     |     |     |     |     |
|       | (cid:90)  | (cid:88)∞         |        |                  | (cid:88)∞ (cid:90) |           |     |     |     |     |     |     |
|       |     |                   |        |            |                    |           |     |     |     |     |     |     |
|       |            |                   | (x−a)n |                   | =                  | (x−a)ndx. |     |     |     |     |     |     |
| (iv)  |            | c n               |        | dx                |                    | c n       |     |     |     |     |     |     |
|       |            | n=0               |        |                   | n=0                |           |     |     |     |     |     |     |
Note. Although the radius of convergence does not change, the interval of convergence may change if
wedifferentiateorintegrateapowerseries.
| Example11.5.4. |     |     | ThederivativeoftheBesselfunction |     |     |     |     |     |     |     |     |     |
| -------------- | --- | --- | -------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
(cid:88)∞
(−1)nx2n
=
|     |     |     |     |     |     | J 0 (x) |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- | --- |
22n(n!)2
n=0
isrepresentedbythepowerseries
|     |     |     |     |     |                | (cid:88)∞ |          | (cid:88)∞ |              |     |     |     |
| --- | --- | --- | --- | --- | -------------- | --------- | -------- | --------- | ------------ | --- | --- | --- |
|     |     |     |     |     |                | d         | (−1)nx2n |           | (−1)n2nx2n−1 |     |     |     |
|     |     |     |     |     | J(cid:48)(x) = |           |          | =         |              |     |     |     |
|     |     |     |     |     | 0              | dx        | 22n(n!)2 |           | 22n(n!)2     |     |     |     |
|     |     |     |     |     |                | n=0       |          | n=1       |              |     |     |     |
1
differentiating
Worked Example 11.5.5. Find a power series expansion of about 0 by the
(1−x)2
1
| powerseriesof |     |     | .   | Finditsradiusofconvergence. |     |     |     |     |     |     |     |     |
| ------------- | --- | --- | --- | --------------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
1−x
Worked Example 11.5.6. Find a power series expansion of ln(1− x) about 0 and its radius of conver-
gence.
=
WorkedExample11.5.7. Findapowerseriesrepresentationfor f(x) arctanx.
(cid:90)
dx
| WorkedExample11.5.8. |     |     |     | Find |     | asapowerseries |     |     |     |     |     |     |
| -------------------- | --- | --- | --- | ---- | --- | -------------- | --- | --- | --- | --- | --- | --- |
1+x7

2nd
| MATH1036        |          |               |                       | SemesterCalculusStudyGuide |        |     |     |     |     | 69  |
| --------------- | -------- | ------------- | --------------------- | -------------------------- | ------ | --- | --- | --- | --- | --- |
| Tutorial11.5.1. | 1.       | [C2]§6.1,p.   |                       | 542: 35,38,41,42.          |        |     |     |     |     |     |
| 2. [C2]§6.2,pp. | 558–559: |               | 66,70,72,79,82,92,94. |                            |        |     |     |     |     |     |
| 11.6 Taylor     |          | and Maclaurin |                       |                            | Series |     |     |     |     |     |
LEARNINGOUTCOMES:
O(cid:3)ncompletionofthissectionyoushould
(cid:3) 1. beabletoidentifyTaylorseriesoffunctionscentredata,
(cid:3) 2. beabletoidentifyMaclaurinseries(Taylorseriescentredat0),
(cid:3) 3. beabletoidentifyn-thdegreeTaylorpolynomialsof f ata,andMaclaurinpolynomials,
4. knowtheMaclaurinseriesoftheelementaryfunctionsandtheirintervalsofconvergence.
RecursivelydifferentiatinginTheorem11.20andsubstituting x = a,wefind
| Theorem11.21. | If  | f hasapowerseriesrepresentationata,writtenas |     |     |     |     |     |     |     |     |
| ------------- | --- | -------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
(cid:88)∞
|     |     |     |     | =    | (x−a)n, | |x−a| |     |     |     |     |
| --- | --- | --- | --- | ---- | ------- | ----- | --- | --- | --- | --- |
|     |     |     |     | f(x) | c n     |       | <   | R,  |     |     |
n=0
thenitscoefficientsaregivenbytheformula
f(n)(a)
=
|     |     |     |     |     | c   | .   |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     | n   | n!  |     |     |     |     |
Thatis,everyfunction f whichhasapowerseriesexpansioncanbewrittenas
|     |     | (cid:88)∞ | f(n)(a) |        |     |     |     |     |     |     |
| --- | --- | --------- | ------- | ------ | --- | --- | --- | --- | --- | --- |
|     |     | =         |         | (x−a)n |     |     |     |     |     |     |
f(x)
n!
n=0
|     |     |         |     | f(cid:48)(a) | f(cid:48)(cid:48)(a) |         | f(cid:48)(cid:48)(cid:48)(a) |             |     |     |
| --- | --- | ------- | --- | ------------ | -------------------- | ------- | ---------------------------- | ----------- | --- | --- |
|     |     | = f(a)+ |     | (x−a)+       |                      | (x−a)2+ |                              | (x−a)3+..., |     |     |
|     |     |         |     | 1!           |                      | 2!      |                              | 3!          |     |     |
andthispowerseriesiscalledtheTaylorseriesofthefunction f ata(oraboutaorcentredata).
Thepolynomial
(cid:88)n
f(i)(a)
|     | T   | (x) = |     | (x−a)i |     |     |     |     |     |     |
| --- | --- | ----- | --- | ------ | --- | --- | --- | --- | --- | --- |
n
i!
i=0
|     |     |     |     | f(cid:48)(a) | f(cid:48)(cid:48)(a) |     |     |     |     |     |
| --- | --- | --- | --- | ------------ | -------------------- | --- | --- | --- | --- | --- |
f(n)(a)
|     |     | = f(a)+ |     | (x−a)+ |     | (x−a)2+···+ |     |     | (x−a)n |     |
| --- | --- | ------- | --- | ------ | --- | ----------- | --- | --- | ------ | --- |
|     |     |         |     | 1!     |     | 2!          |     | n!  |        |     |
iscalledthen-thdegreeTaylorpolynomialata.
=
| Inthespecialcasea |     | 0,theexpansionreads |     |     |     |     |     |     |     |     |
| ----------------- | --- | ------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
(cid:88)∞ f(n)(0)
|     |     | f(x) | =   |     | xn  |     |     |     |     |     |
| --- | --- | ---- | --- | --- | --- | --- | --- | --- | --- | --- |
n!
n=0
|     |     |     |     | f(cid:48)(0) |     | f(cid:48)(cid:48)(0) | f(cid:48)(cid:48)(cid:48)(0) |         |     |     |
| --- | --- | --- | --- | ------------ | --- | -------------------- | ---------------------------- | ------- | --- | --- |
|     |     |     | =   | f(0)+        | x+  | x2+                  |                              | x3+..., |     |     |
|     |     |     |     |              | 1!  | 2!                   | 3!                           |         |     |     |
andinthiscasethepowerseriesisalsocalledtheMaclaurinseriesofthefunction f.
We are now going to find the Maclaurin series for some important functions. We assume, without
proof, that these functions coincide with their Maclaurin series expansions. The existence of a series
representationwillbeshowninsecondyear. WewillonlyshowthattheMaclaurinseriesconverge.

2nd
| 70  |     | SemesterCalculusStudyGuide |     | MATH1036 |
| --- | --- | -------------------------- | --- | -------- |
= ex
WorkedExample11.6.1. FindtheMaclaurinseriesofthefunction f(x) anditsradiusofconver-
gence.
| TheMaclaurinseriesofex | is  |           |           |     |
| ---------------------- | --- | --------- | --------- | --- |
|                        |     | (cid:88)∞ | xn        |     |
|                        |     | ex =      | forall x. |     |
n!
n=0
Inparticular,
(cid:88)∞
|     |     | 1        | 1 1 1    |     |
| --- | --- | -------- | -------- | --- |
|     |     | e = = 1+ | + + +... |     |
|     |     | n!       | 1! 2! 3! |     |
n=0
| WorkedExample11.6.2. | FindtheTaylorseriesfor |     | f(x) = ex at2. |     |
| -------------------- | ---------------------- | --- | -------------- | --- |
(cid:88)∞
e2
|     |     | ex = (x−2)n |     |     |
| --- | --- | ----------- | --- | --- |
forall x.
n!
n=0
=
| WorkedExample11.6.3. | FindtheMaclaurinseriesfor |              | f(x) sinx. |     |
| -------------------- | ------------------------- | ------------ | ---------- | --- |
|                      |                           | (cid:88)∞    | x2n+1      |     |
|                      |                           | sinx = (−1)n |            |     |
(2n+1)!
n=0
x3 x5 x7
|     |     | = x− | + − +... |     |
| --- | --- | ---- | -------- | --- |
3! 5! 7!
=
| WorkedExample11.6.4. | FindtheMaclaurinseriesfor |     | f(x) cosx. |     |
| -------------------- | ------------------------- | --- | ---------- | --- |
(cid:88)∞
x2n
|     |     | cosx = (−1)n |     |     |
| --- | --- | ------------ | --- | --- |
(2n)!
n=0
x2 x4 x6
|     |     | = 1− | + − +... |     |
| --- | --- | ---- | -------- | --- |
2! 4! 6!
| WorkedExample11.6.5. | FindtheMaclaurinseriesfor |     | xcosx. |     |
| -------------------- | ------------------------- | --- | ------ | --- |
coefficients
Note. By Theorem 11.21, if a function has a power series representation about a, then the
ofthepowerseriesareuniquelydetermined.
Below is a table of important Maclaurin series we have found so far, together with their intervals of
convergence.

2nd
| MATH1036 |     |     |     | SemesterCalculusStudyGuide |     |     |     |     |     | 71  |
| -------- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | --- |
(cid:88)∞
1
|     |     | =   | xn  | = 1+x+x2+x3+... |     |     |     |     | (−1,1) |     |
| --- | --- | --- | --- | --------------- | --- | --- | --- | --- | ------ | --- |
1−x
n=0
|     |     | (cid:88)∞ | xn  |     | x2 x3 |     |     |     |     |     |
| --- | --- | --------- | --- | --- | ----- | --- | --- | --- | --- | --- |
x
|     | ex  | =   | = 1+ | +   | +     | +... |     |     | (−∞,∞) |     |
| --- | --- | --- | ---- | --- | ----- | ---- | --- | --- | ------ | --- |
|     |     |     | n!   | 1!  | 2! 3! |      |     |     |        |     |
n=0
|     |      |     | (cid:88)∞ | x2n+1 |      |     |     |      |        |     |
| --- | ---- | --- | --------- | ----- | ---- | --- | --- | ---- | ------ | --- |
|     |      |     |           |       |      | x3  | x5  | x7   |        |     |
|     | sinx | =   | (−1)n     |       | = x− | +   | −   | +... | (−∞,∞) |     |
(2n+1)!
|     |     |     |     |     |     | 3!  | 5!  | 7!  |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
n=0
(cid:88)∞
|     |     |     |       | x2n |      | x2 x4 | x6  |      |        |     |
| --- | --- | --- | ----- | --- | ---- | ----- | --- | ---- | ------ | --- |
|     |     | =   | (−1)n |     | = 1− | +     | −   | +... | (−∞,∞) |     |
cosx
|     |     |     |     | (2n)! |     | 2! 4! | 6!  |     |     |     |
| --- | --- | --- | --- | ----- | --- | ----- | --- | --- | --- | --- |
n=0
(cid:88)∞
|     |         |     |         | x2n+1 |     | x3  | x5  | x7   |        |     |
| --- | ------- | --- | ------- | ----- | --- | --- | --- | ---- | ------ | --- |
|     |         |     | = (−1)n |       | =   | +   |     | +... |        |     |
|     | arctanx |     |         |       |     | x−  | −   |      | (−1,1) |     |
|     |         |     |         | 2n+1  |     | 3   | 5   | 7    |        |     |
n=0
(cid:90)
e−x2
| WorkedExample11.6.6. |     | Evaluate |     |     | dxasaninfiniteseries. |     |     |     |     |     |
| -------------------- | --- | -------- | --- | --- | --------------------- | --- | --- | --- | --- | --- |
ex−1−x
| WorkedExample11.6.7. |     | 1.  | Evaluate | lim |     | .   |     |     |     |     |
| -------------------- | --- | --- | -------- | --- | --- | --- | --- | --- | --- | --- |
|                      |     |     |          | x→0 | x2  |     |     |     |     |     |
2. (a)FindtheMaclaurinseriesofsinhxfromthedefinitionofaMaclaurinseries(homeworkexercise).
(b)FindtheMaclaurinseriesofsinhxusinganexponentialexpansion.
Powerseriescanbemultipliedanddividedtoobtainnewpowerseries.
| WorkedExample11.6.8. |     | Findthefirst3termsofthepowerseriesfor |     |     |     |     |     |     |     |     |
| -------------------- | --- | ------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
1. exsinx
2. secx
3. tanx
| Tutorial11.6.1. | 1. [C2]§6.3,p. |                                  | 578: | 140,142,149,150,155,158. |     |     |     |     |     |     |
| --------------- | -------------- | -------------------------------- | ---- | ------------------------ | --- | --- | --- | --- | --- | --- |
| 2. [C2]§6.4,p.  | 597:           | 202,204,208,212,219,220,230–232. |      |                          |     |     |     |     |     |     |
x−arctanx
| 3. FindtheMaclaurinseriesrepresentationfor |     |     |     |     |     |     | .   |     |     |     |
| ------------------------------------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
x3
| 11.7 Binomial |     | Series |     |     |     |     |     |     |     |     |
| ------------- | --- | ------ | --- | --- | --- | --- | --- | --- | --- | --- |
LEARNINGOUTCOMES:
Oncompletionofthissectionyoushould
(cid:3)
1. knowhowtowritetheBinomialSeriesinexpandedformasaninfiniteseriesandinabbreviated
formusingsigmanotation,
(cid:3)
2. knowunderwhichconditionstheBinomialSeriesconvergesordiverges,
(cid:3)
|     |     |     |     |     |     | (cid:16) | (cid:17) |     |     |     |
| --- | --- | --- | --- | --- | --- | -------- | -------- | --- | --- | --- |
knowthedefinitionofthebinomialcoefficient k ifkisnolongerapositiveintegerandn ≥
| 3.  |     |     |     |     |     |     |     |     |     | 1.  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
n

2nd
| 72  |     |     |     | SemesterCalculusStudyGuide |     |     |     | MATH1036 |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | -------- |
= (1+x)k
| Considerthefunction |     | f(x) |     | foranyrealk. | Then |     |     |     |
| ------------------- | --- | ---- | --- | ------------ | ---- | --- | --- | --- |
= (1+x)k
f(x)
f(cid:48)(x) = k(1+x)k−1
f(cid:48)(cid:48)(x) = k(k−1)(1+x)k−2
.
. .
k(k−1)···(k−n+1)(1+x)k−n
f(n)(x) =
andtherefore
|     |     |     |     | f(n)(0) = k(k−1)···(k−n+1). |     |     |     |     |
| --- | --- | --- | --- | --------------------------- | --- | --- | --- | --- |
TheMaclaurinseriesof(1+x)k
iscalledtheBinomialSeriesandwehave
∈ Rand|x|
| Theorem11.22(BinomialSeries). |     |        |     | Fork                        | <   | 1,          |        |     |
| ----------------------------- | --- | ------ | --- | --------------------------- | --- | ----------- | ------ | --- |
|                               |     |        |     | k(k−1)                      |     | k(k−1)(k−2) |        |     |
|                               |     | (1+x)k | =   | 1+kx+                       | x2+ |             | x3+... |     |
|                               |     |        |     |                             | 2!  | 3!          |        |     |
|                               |     |        |     | (cid:88)∞ (cid:32) (cid:33) |     |             |        |     |
k
|     |     |     | =   | xn, |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
n
n=0
|       | (cid:32) (cid:33) |                  |     |       |     | (cid:32) (cid:33) |     |     |
| ----- | ----------------- | ---------------- | --- | ----- | --- | ----------------- | --- | --- |
|       | k                 | k(k−1)···(k−n+1) |     |       |     | k                 |     |     |
|       | =                 |                  |     | ≥     |     | =                 |     |     |
| where |                   |                  |     | (n 1) | and | 1.                |     |     |
|       | n                 | n!               |     |       |     | 0                 |     |     |
(cid:32) (cid:33)
k
Note. The binomial coefficent defined in Theorem 11.22 coincides with the usual binomial coeffi-
n
| cientwhenk |     | ≥ nisanonnegativeinteger. |     |     |     |     |     |     |
| ---------- | --- | ------------------------- | --- | --- | --- | --- | --- | --- |
Worked Example 11.7.1. Find the Maclaurin series and radii of convergence for the following func-
tions:
1
1.
(1+x)2
1
2. √
4−x
| Tutorial11.7.1. |     | [C2]§6.4,p. | 596: | 175,177,195,197,200,201. |     |     |     |     |
| --------------- | --- | ----------- | ---- | ------------------------ | --- | --- | --- | --- |

| Chapter |     | 12  |     |     |     |     |     |     |     |
| ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
ff
| Di erential |     |     | Equations |     |     |     |     |     |     |
| ----------- | --- | --- | --------- | --- | --- | --- | --- | --- | --- |
LEARNINGOUTCOMES:
On completion of this section you should be able to (tick the checkbox when you have mastered the
skill)
(cid:3)
1. identifythetypeofdifferentialequationunderconsideration,
(cid:3)
2. knowthetechniqueofsolvingsuchadifferentialequation,
(cid:3)
3. findthegeneralsolutiontothegivendifferentialequation,
(cid:3)
4. findtheparticularsolutiontoagiveninitialvalueproblem,
(cid:3)
5. knowhowtosolvetheexaminableworkedoutproblemsfromthissection.
Adifferentialequationisanequationthatinvolvesderivativesordifferentialsofunknownfunctions. An
x,y,y(cid:48),y(cid:48)(cid:48),...,y(n), differential
equation that involves where y is a function of x is called an ordinary
equationofordern(nth
orderODE).
dy
WorkedExample12.0.1. 1. = −cosxory(cid:48) = −cosxisa1st orderODE.
dx
d2y
| 2. +kx−sinx |     | = 0ory(cid:48)(cid:48)+kx−sinx |     |     | = 0isa2nd | orderODE. |     |     |     |
| ----------- | --- | ------------------------------ | --- | --- | --------- | --------- | --- | --- | --- |
dx2
| 3. (y(cid:48)(cid:48)(cid:48))4−x2(y(cid:48)(cid:48))5+4xy |     | =   | xex isa3rd | orderODE. |     |     |     |     |     |
| ---------------------------------------------------------- | --- | --- | ---------- | --------- | --- | --- | --- | --- | --- |
The order of an ODE is thus the highest order derivative occuring in the ODE. In this course we will
primarilydealwithsolving1st
orderODE’s.
differential
If a function f(x) has the property that substituting f and its derivatives into a equation
| satisfiestheODE,then |     | f iscalledasolutiontotheODE. |     |     |     |     |     |     |     |
| -------------------- | --- | ---------------------------- | --- | --- | --- | --- | --- | --- | --- |
Worked Example 12.0.2. f(x) = cos2x and g(x) = Asin2x+ Bcos2x, A,B ∈ R are solutions to the
ODE
|     |     |     |     |     | y(cid:48)(cid:48)+4y | =   |     |     |     |
| --- | --- | --- | --- | --- | -------------------- | --- | --- | --- | --- |
0.
|     |     |     |     | =   |     | =   |     | −   | ∈ R |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Tutorial 12.0.1. 1. Verify that f(x) sin2x and g(x) Rcos(2x α), α,R are solutions to
d2y
| +4y = |     |     |     |     |     |     |     |     |     |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
0.
dx2
dy
|               | =Cx− | 2       | ∈ Risasolutionto2xy3+3x2y2 |     |     |     | =   |     |     |
| ------------- | ---- | ------- | -------------------------- | --- | --- | --- | --- | --- | --- |
| 2. Provethaty |      | 3 withC |                            |     |     |     |     | 0.  |     |
dx
| IfC ∈ Rshowthaty |     | =Cx3 |               |     | x3y(cid:48)(cid:48)(cid:48)+x2y(cid:48)(cid:48)−3xy(cid:48)−3y |     |     | =   |     |
| ---------------- | --- | ---- | ------------- | --- | -------------------------------------------------------------- | --- | --- | --- | --- |
| 3.               |     |      | isasolutionto |     |                                                                |     |     | 0.  |     |
73

2nd
| 74  |     |     | SemesterCalculusStudyGuide |     |                | MATH1036 |
| --- | --- | --- | -------------------------- | --- | -------------- | -------- |
|     |     |     |                            | =   | + Ae−x + Be−2x |          |
4. If A and B are any real constants, show that y sinx − 3cosx is a solution to
| y(cid:48)(cid:48)+3y(cid:48)+2y | = 10sinx. |     |     |     |     |     |
| ------------------------------- | --------- | --- | --- | --- | --- | --- |
5. IdentifytheorderofeachODEintheabovetutorialexamples.
6. (a)Showthatanyfunctionoftheform
= Aekx+Be−kx
y
or
=Csinhkx+Dcoshkx
y
| satisfiesthedifferentialequationy(cid:48)(cid:48) |                                 |           | = k2y.            |      |     |     |
| ------------------------------------------------- | ------------------------------- | --------- | ----------------- | ---- | --- | --- |
| (b)Findy                                          | = y(x)suchthaty(cid:48)(cid:48) | = 9y,y(0) | = −4,y(cid:48)(0) | = 6. |     |     |
Ascanbenoted,solutionstoODE’sarenotunique. Wenextfocusonfindingasolutiontovarioustypes
ofODE’s.
| 12.1 | Separable | Differential | Equations |     |     |     |
| ---- | --------- | ------------ | --------- | --- | --- | --- |
TheseparableODE’sarethesimplesttype. AsthenamesuggestsiftheODEcanbearrangedsuchthat
all x’sareontheleft-handsideoftheequationandally’sareontheright-handsideoftheequation(or
viceversa),thentheODEiscalledseparable. ThegeneralformofaseparableODEis
dy
|     |     | M(x)+N(y) | =    | M(x)dx+N(y)dy | =   |     |
| --- | --- | --------- | ---- | ------------- | --- | --- |
|     |     |           | 0 or |               | 0.  |     |
dx
Thetechniquetofindasolutionis
(cid:90) (cid:90)
|                      |     | M(x)dx+N(y)dy | = 0 ⇒ | M(x)dx+ | N(y)dy =C. |     |
| -------------------- | --- | ------------- | ----- | ------- | ---------- | --- |
| WorkedExample12.1.1. |     | Solve         |       |         |            |     |
|                      |     |               | dy    | sinx    |            |     |
|                      |     |               | =     | .       |            |     |
|                      |     |               | dx    | cosy    |            |     |
Notethat:
1. Thesolutiongivenabove,withthearbitraryconstantC,isthegeneralsolution. Itgivesageneral
familyofsolutions.
|     |     | (cid:90) |     |     | (cid:90) |     |
| --- | --- | -------- | --- | --- | -------- | --- |
2. Theconstantarisingfrom cosydyandtheconstantfrom sinxdxarecombinedintotheone
constantC.
3. Ingeneral,annth orderODEwillhavenarbitraryconstantsinitssolution.
4. Oftenthegeneralsolutionisgiveninimplicitform;itmaybeleftthatway.
WorkedExample12.1.2.
Solve
|     |     |     | y4e2x+y(cid:48) | = 0. |     |     |
| --- | --- | --- | --------------- | ---- | --- | --- |
An initial value problem arises when we wish to solve an ODE with an initial condition. This allows
one to calculate a particular value for the constant C in the general solution. The resulting solution is
thenaparticularsolutiontotheODE.

2nd
| MATH1036                             |     |                                   | SemesterCalculusStudyGuide |        |      | 75  |
| ------------------------------------ | --- | --------------------------------- | -------------------------- | ------ | ---- | --- |
| WorkedExample12.1.3.                 |     | FindtheparticularsolutiontotheODE |                            |        |      |     |
|                                      |     |                                   | 2x(y+1)dx−ydy              | = 0    |      |     |
|                                      |     |                                   | =                          | =      | =    |     |
| thatsatisfiestheinitialconditiony(0) |     |                                   | −2,i.e.,y                  | −2when | x 0. |     |
Tutorial12.1.1.
| SolvethefollowingseparableODE’s. |     |     | (*indicatesabitmorechallenging.) |     |     |     |
| -------------------------------- | --- | --- | -------------------------------- | --- | --- | --- |
1. y(cid:48) = 2xy.
dy
|     | = 1−x2. |     |     |     |     |     |
| --- | ------- | --- | --- | --- | --- | --- |
2. xy
dx
*3. (1+3x2)dy = (1−3y2)dx(youmaywanttousepartialfractions). Findtheparticularsolutionthat
√
| satisfiesy | = 3when | x = 1. |     |     |     |     |
| ---------- | ------- | ------ | --- | --- | --- | --- |
dy
| xy+ | ex2lny = |     |     |     |     |     |
| --- | -------- | --- | --- | --- | --- | --- |
| 4.  | 0.       |     |     |     |     |     |
dx
| 5. y(x+1)y(cid:48) | = x2+2,y(0) | = 1. |     |     |     |     |
| ------------------ | ----------- | ---- | --- | --- | --- | --- |
Differential
| 12.2 | Homogeneous |     | Equations |     |     |     |
| ---- | ----------- | --- | --------- | --- | --- | --- |
Afunctionoftwovariables f(x,y)issaidtobehomogeneousofdegreenif
= tnf(x,y)
f(tx,ty)
| foreacht | > 0. |     |     |     |     |     |
| -------- | ---- | --- | --- | --- | --- | --- |
WorkedExample12.2.1. Showthat f(x,y) = 2x5−x2y3+5xy4 ishomogeneousofdegree5.
Itiseasiertonotethatif f isapolynomialin xandysuchthatthesumofthepowersof xandyineach
| termisthesamevaluen,then |     | f ishomogeneousofdegreen. |     |     |     |     |
| ------------------------ | --- | ------------------------- | --- | --- | --- | --- |
1
| WorkedExample12.2.2. |     | g(x,y) = | ey x ishomogeneousofdegree−2. |     |     |     |
| -------------------- | --- | -------- | ----------------------------- | --- | --- | --- |
x2+y2
Solution.
|     |     |     |            | 1           | t x |     |
| --- | --- | --- | ---------- | ----------- | --- | --- |
|     |     |     | g(tx,ty) = | e           |     |     |
|     |     |     |            | (tx)2+(ty)2 | ty  |     |
1 x
|     |     |     | =   | ey  |     |     |
| --- | --- | --- | --- | --- | --- | --- |
t2(x2+y2)
|     |     |     | =   | t−2g(x,y). |     |     |
| --- | --- | --- | --- | ---------- | --- | --- |
Thusgishomogeneousofdegree−2.
(cid:32) (cid:33)
x
| WorkedExample12.2.3. |     | h(x,y) = | y−xcot | ishomogeneousofdegree1. |     |     |
| -------------------- | --- | -------- | ------ | ----------------------- | --- | --- |
y
Ahomogeneousdifferentialequationisanequationoftheform
|     |     |     | f(x,y)dx+g(x,y)dy | =   |     |     |
| --- | --- | --- | ----------------- | --- | --- | --- |
0
where f andgarehomogeneousfunctionsofthesamedegree. Tosolvesuchtypeofequationswemake
the appropriate substitution y = vx (or x = vy). Then dy = vdx+ xdv (or dx = vdy+ydv). We then
substitutebackyanddy(or xanddx)intotheoriginalODEwhichreducesthehomogeneousODEtoa
separableODE.

2nd
| 76  |     |     |     | SemesterCalculusStudyGuide |     |     | MATH1036 |
| --- | --- | --- | --- | -------------------------- | --- | --- | -------- |
Solvethedifferentialequation
WorkedExample12.2.4.
|     |     |     |     | (x2+y2)dx−x2dy |     | =   |     |
| --- | --- | --- | --- | -------------- | --- | --- | --- |
0.
| WorkedExample12.2.5.   |     |     | Solvethedifferentialequation |               |     |     |     |
| ---------------------- | --- | --- | ---------------------------- | ------------- | --- | --- | --- |
|                        |     |     |                              | 3ydx+(x+2y)dy |     | = 0 |     |
| byusingthesubstitution |     | x   | = vy.                        |               |     |     |     |
Tutorial12.2.1.
StatethedegreeofthefollowinghomogeneousODE’sandthensolvethem.
1. xdy+ydx = 0(usey = vxand x = yvandseeifyougetthesameanswer).
| 2. x(x+y)dy−y2dx |     | = 0. |     |     |     |     |     |
| ---------------- | --- | ---- | --- | --- | --- | --- | --- |
(cid:16) (cid:17)
| xdy+                  | xe−y | =   |                          |     |     |     |     |
| --------------------- | ---- | --- | ------------------------ | --- | --- | --- | --- |
| 3.                    | x −y | dx  | 0.                       |     |     |     |     |
|                       |      | =   | vytosolve2xydx+(y2−x2)dy |     |     | =   |     |
| 4. Usethesubstitution |      | x   |                          |     |     | 0.  |     |
Differential
| 12.3 Linear |     |     |     | Equations |     |     |     |
| ----------- | --- | --- | --- | --------- | --- | --- | --- |
Equationsoftheform
dy
|     |     |     |     | +   | p(x)y = q(x) |     |     |
| --- | --- | --- | --- | --- | ------------ | --- | --- |
dx
arecalledfirst-orderlineardifferentialequations. Ifthefunctions pandqarecontinuous,wecansolve
(cid:82)
thistypeofODEbymultiplyingtheequationbye p(x)dx,calledanintegratingfactor. Thenweget
|     |     |     | dy  | (cid:82) | (cid:82) | (cid:82) |     |
| --- | --- | --- | --- | -------- | -------- | -------- | --- |
|     |     |     |     | p(x)dx+  | p(x)dx   | = p(x)dx |     |
|     |     |     |     | e p(x)ye |          | q(x)e    |     |
dx
However,theLHSoftheaboveequationis
|     |     | dy (cid:82) |        | (cid:82) | d (cid:16) (cid:82) | (cid:17)             |     |
| --- | --- | ----------- | ------ | -------- | ------------------- | -------------------- | --- |
|     |     | p(x)dx+     |        | p(x)dx = | p(x)dx              |                      |     |
|     |     | e           | p(x)ye |          | ye                  | (verifythisidentity) |     |
|     |     | dx          |        |          | dx                  |                      |     |
sothatthelinearODEisnowreducedto
|     |     |     |     | d (cid:16) (cid:82) | (cid:17) | (cid:82) |     |
| --- | --- | --- | --- | ------------------- | -------- | -------- | --- |
|     |     |     |     | p(x)dx              | =        | p(x)dx   |     |
|     |     |     |     | ye                  | q(x)e    |          |     |
dx
whichwethensolvebydirectintegration.
If
(cid:82)
|     |     |     |     | µ(x) | = e p(x)dx |     |     |
| --- | --- | --- | --- | ---- | ---------- | --- | --- |
istheintegratingfactor,thenthegeneralsolutionis
|     |     |     |     |     | (cid:32)(cid:90) | (cid:33) |     |
| --- | --- | --- | --- | --- | ---------------- | -------- | --- |
1
|     |     |     |     | =    | q(x)µ(x)dx+C |     |     |
| --- | --- | --- | --- | ---- | ------------ | --- | --- |
|     |     |     |     | y(x) |              | .   |     |
µ(x)
Solvethedifferentialequation
WorkedExample12.3.1.
|                      |     |     |                             | 1                 | 1       |       |     |
| -------------------- | --- | --- | --------------------------- | ----------------- | ------- | ----- | --- |
|                      |     |     |                             | y(cid:48)+        | y = , x | > 0.  |     |
|                      |     |     |                             | x                 | x2      |       |     |
| WorkedExample12.3.2. |     |     | Findtheparticularsolutionto |                   |         |       |     |
|                      |     |     |                             |                   |         | π π   |     |
|                      |     |     |                             | y(cid:48)−ytanx = |         |       |     |
|                      |     |     |                             |                   | secx, − | < x < |     |
|                      |     |     |                             |                   |         | 2 2   |     |
(cid:18)π(cid:19)
| whichsatisfiesy |     | = 0. |     |     |     |     |     |
| --------------- | --- | ---- | --- | --- | --- | --- | --- |
4
Tutorial12.3.1.
| [C2]§5.4,p. | 420: | 208–212,218,221,222,224,225,229244,245. |     |     |     |     |     |
| ----------- | ---- | --------------------------------------- | --- | --- | --- | --- | --- |

2nd
| MATH1036 |       |              | SemesterCalculusStudyGuide |     |     |     | 77  |
| -------- | ----- | ------------ | -------------------------- | --- | --- | --- | --- |
| 12.4     | Exact | Differential | Equations                  |     |     |     |     |
A prerequisite for this section is the notion of a partial derivative as discussed in the Semester One
StudyGuide.
We will be concerned mainly with functions of two variables f(x,y) as seen in the previous section on
|     |     |     |     |     |     | =   | = ∂f |
| --- | --- | --- | --- | --- | --- | --- | ---- |
homogeneous ODE’s. Recall that if f is a function of two variables, then to find f (x,y) f
|     |     |     |     |     | x   | x   | ∂x  |
| --- | --- | --- | --- | --- | --- | --- | --- |
wemayregardyasaconstantanddifferentiate
|           |        |     |     | f(x,y)withrespectto | xintheusualway. | Similarlyfor |     |
| --------- | ------ | --- | --- | ------------------- | --------------- | ------------ | --- |
| f (x,y) = | f = ∂f | .   |     |                     |                 |              |     |
| y         | y      |     |     |                     |                 |              |     |
∂y
Partial derivatives are used in solving a particular type of first order ODE’s called exact differential
equations. Let M and N be functions of two variables x and y which have continuous first partial
Thedifferentialequation
derivatives.
dy
|     |     | M(x,y)+N(x,y) |     | = 0 or M(x,y)dx+N(x,y)dy | = 0 |     |     |
| --- | --- | ------------- | --- | ------------------------ | --- | --- | --- |
dx
isanexactdifferentialequationprovidedthat
|     |     |     | ∂M  | ∂N  |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
= =
|     |     |     |     | or M N . |     |     |     |
| --- | --- | --- | --- | -------- | --- | --- | --- |
|     |     |     | ∂y  | ∂x y x   |     |     |     |
WemaythustestwhetheragivenODE
Mdx+Ndy =
0
| isexactbycalculating |     | M andN | . Accordingly, |     |     |     |     |
| -------------------- | --- | ------ | -------------- | --- | --- | --- | --- |
|                      |     | y      | x              |     |     |     |     |
=
|     |     |     | M   | N ⇒ ODEISEXACT, |     |     |     |
| --- | --- | --- | --- | --------------- | --- | --- | --- |
y x
|     |     |     | M (cid:44) | N ⇒ ODEISNOTEXACT. |     |     |     |
| --- | --- | --- | ---------- | ------------------ | --- | --- | --- |
y x
| WorkedExample12.4.1. |     | Showthatthedifferentialequation |                    |     |     |     |     |
| -------------------- | --- | ------------------------------- | ------------------ | --- | --- | --- | --- |
|                      |     |                                 | (2x−2)dx+(8y−16)dy | = 0 |     |     |     |
isexact.
Theorem12.1. If Mdx+Ndy = 0isanexactdifferentialequation,thenthereexistsafunction f(x,y)
|     | =   | =   | differential |     |     | =   |     |
| --- | --- | --- | ------------ | --- | --- | --- | --- |
such that f M and f N and the equation has a solution of the form f(x,y) C for a
|     | x   | y   |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
constantC.
TheabovetheoremprovidesatechniqueforfindingasolutiontotheexactODE
Mdx+Ndy =
0.
Weillustratebythefollowingexamples.
| WorkedExample12.4.2. |     | Solvethedifferentialequation   |                    |      |      |     |     |
| -------------------- | --- | ------------------------------ | ------------------ | ---- | ---- | --- | --- |
|                      |     |                                | (2x−2)dx+(8y−16)dy | = 0. |      |     |     |
| WorkedExample12.4.3. |     | Solvethedifferentialequation   |                    |      |      |     |     |
|                      |     | (ycosx+2xey)dx+(sinx+x2ey+2)dy |                    |      | = 0. |     |     |

2nd
| 78  | SemesterCalculusStudyGuide |     |     | MATH1036 |     |
| --- | -------------------------- | --- | --- | -------- | --- |
Solvethedifferentialequation
WorkedExample12.4.4.
|     | (2x+y3)dx+(3xy2−e2y)dy |     | =   |     |     |
| --- | ---------------------- | --- | --- | --- | --- |
0
| subjecttotheinitialconditiony(−1) | =   |     |     |     |     |
| --------------------------------- | --- | --- | --- | --- | --- |
0.
Tutorial12.4.1.
Showthatthefollowingfourdifferentialequationsareexactandthensolvethem.
xy2dx+x2ydy =
1. 0
| (2x+3y+1)dx+(3x+4y−1)dy                  | =    |               |              |                 |       |
| ---------------------------------------- | ---- | ------------- | ------------ | --------------- | ----- |
| 2.                                       | 0.   |               |              |                 |       |
| 3. (2x+y3)dx+(3xy2+ye2y)dy               | = 0. |               |              |                 |       |
| 4. (ycosx+2xey+xsinx)dx+(sinx+x2ey+2y)dy |      | = 0.          |              |                 |       |
| Thedifferentialequation3ydx+(3x−1)dy     |      | =             |              |                 |       |
| 5.                                       |      | 0isseparable, | homogeneous, | linearandexact. | Solve |
itfourdifferentwaysandshowthatyougetthesameanswereachtime.
6. NowgobackoverthetutorialquestionsofSections12.1–12.4andseeifthereisanotherwaytosolve
eachofthedifferentiableequations.
Solvethefollowingthreedifferentialequationsusinganyofthetechniquesyouhavelearntabove.
7. y(cid:48) = y+xify(1) = 0.
dy 1
=
8. .
dx (3x+2)2
| 9. (x+3y)dx+(3x−2y)dy = 0. |     |     |     |     |     |
| -------------------------- | --- | --- | --- | --- | --- |
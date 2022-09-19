import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { consoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

// create an object that satisfice the "Data Reader interface"
const csvFileReader = new CsvFileReader("football.csv");

// create an instance of MartchReader and pass in something satisfying
// the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new consoleReport()
);

summary.buildAndPrintReport(matchReader.matches);

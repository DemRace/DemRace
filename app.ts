/// <reference path="scripts/ai.0.22.6-build00108.d.ts" />



module TheRace {

    export class TheRace1 {

        element: HTMLElement;
        span: HTMLElement;




        private applicationInsights;

        private TotalDelegates: number;

        private TotalDelegatesLocked: number;

        private TotalDelegatesInPlay: number;

        private TotalDelegatesClinton: number;

        private TotalDelegatesSanders: number;

        public DefaultClintonVote: number = 50;

        public Elections: Array<Election> = new Array<Election>();

        public LoadRace(element: HTMLElement) {

            var snippet: any = {
                config: {
                    instrumentationKey: "61cdc460-eec6-4fb5-a48c-83a72cddf45a"
                }
            };
            var init = new Microsoft.ApplicationInsights.Initialization(snippet);
            this.applicationInsights = init.loadAppInsights();


            this.applicationInsights.trackPageView("Index");
            var list: Array<Election> = [];
            this.element = element;
            this.span = document.createElement('span');
            this.element.appendChild(this.span);


            this.TotalDelegates = 4051;
            this.TotalDelegatesLocked = 0;
            this.TotalDelegatesInPlay = 0;
            this.TotalDelegatesClinton = 0;
            this.TotalDelegatesSanders = 0;
            this.LoadElections();
            this.DisplayElections();
        }

        private LoadElections() {
            // Load Iowa
            let State: Election = new Election();
            State.ElectionName = "Iowa";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 44;
            State.TotalCongDistricts = 4;
            let se: SubElection = new SubElection();
            se.ElectionType = SubElectionType.AtLarge;
            se.CongressionalDistrict = 0;
            se.TotalDelegates = 9;
            State.SubElections.push(se);
            se = new SubElection();
            se.ElectionType = SubElectionType.PLEO;
            se.CongressionalDistrict = 0;
            se.TotalDelegates = 6;
            State.SubElections.push(se);
            se = new SubElection();
            se.ElectionType = SubElectionType.CD;
            se.CongressionalDistrict = 1;
            se.TotalDelegates = 8;
            State.SubElections.push(se);
            se = new SubElection();
            se.ElectionType = SubElectionType.CD;
            se.CongressionalDistrict = 2;
            se.TotalDelegates = 8;
            State.SubElections.push(se);
            se = new SubElection();
            se.ElectionType = SubElectionType.CD;
            se.CongressionalDistrict = 3;
            se.TotalDelegates = 7;
            State.SubElections.push(se);
            se = new SubElection();
            se.ElectionType = SubElectionType.CD;
            se.CongressionalDistrict = 4;
            se.TotalDelegates = 6;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 23;
            State.ResultSandersDelegates = 21;

            this.Elections.push(State);
            
            // Load New Hampshire
            State = new Election();
            State.ElectionName = "New Hampshire";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 24;
            State.TotalCongDistricts = 2;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 9;
            State.ResultSandersDelegates = 15;

            this.Elections.push(State);

            // Load Nevada

            State = new Election();
            State.ElectionName = "Nevada";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 35;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 20;
            State.ResultSandersDelegates = 15;

            this.Elections.push(State);

            // Load South Carolina
            State = new Election();
            State.ElectionName = "South Carolina";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 53;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 39;
            State.ResultSandersDelegates = 14;

            this.Elections.push(State);

            // Load Democrats Abroad
            State = new Election();
            State.ElectionName = "Democrats Abroad";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 13;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Alabama
            State = new Election();
            State.ElectionName = "Alabama";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 53;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 44;
            State.ResultSandersDelegates = 9;

            this.Elections.push(State);

            // Load American Samoa	
            State = new Election();
            State.ElectionName = "American Samoa";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 6;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 4;
            State.ResultSandersDelegates = 2;

            this.Elections.push(State);

            // Load Arkansas
            State = new Election();
            State.ElectionName = "Arkansas";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 32;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 22;
            State.ResultSandersDelegates = 10;

            this.Elections.push(State);

            // Load Colorado
            State = new Election();
            State.ElectionName = "Colorado";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 66;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 28;
            State.ResultSandersDelegates = 38;

            this.Elections.push(State);

            // Load Georgia
            State = new Election();
            State.ElectionName = "Georgia";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 102;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 74;
            State.ResultSandersDelegates = 28;

            this.Elections.push(State);

            // Load Massachusetts
            State = new Election();
            State.ElectionName = "Massachusetts";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 91;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 45;
            State.ResultSandersDelegates = 46;

            this.Elections.push(State);

            // Load Minnesota
            State = new Election();
            State.ElectionName = "Minnesota";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 77;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 31;
            State.ResultSandersDelegates = 46;

            this.Elections.push(State);

            // Load Oklahoma
            State = new Election();
            State.ElectionName = "Oklahoma";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 38;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 17;
            State.ResultSandersDelegates = 21;

            this.Elections.push(State);

            // Load Tennessee
            State = new Election();
            State.ElectionName = "Tennessee";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 67;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 44;
            State.ResultSandersDelegates = 23;

            this.Elections.push(State);

            // Load Texas
            State = new Election();
            State.ElectionName = "Texas";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 222;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 146;
            State.ResultSandersDelegates = 76;

            this.Elections.push(State);


            // Load Vermont
            State = new Election();
            State.ElectionName = "Vermont";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 16;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 0;
            State.ResultSandersDelegates = 16;

            this.Elections.push(State);

            // Load Virginia
            State = new Election();
            State.ElectionName = "Virginia";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 95;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 62;
            State.ResultSandersDelegates = 33;

            this.Elections.push(State);

            // Load Kansas
            State = new Election();
            State.ElectionName = "Kansas";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 33;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 10;
            State.ResultSandersDelegates = 23;

            this.Elections.push(State);

            // Load Louisiana
            State = new Election();
            State.ElectionName = "Louisiana";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 51;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 39;
            State.ResultSandersDelegates = 12;

            this.Elections.push(State);

            // Load Nebraska
            State = new Election();
            State.ElectionName = "Nebraska";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 25;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 10;
            State.ResultSandersDelegates = 15;

            this.Elections.push(State);

            // Load Maine
            State = new Election();
            State.ElectionName = "Maine";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 25;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);

            //State Results
            State.ElectionLocked = true;
            State.ResultClintonDelegates = 9;
            State.ResultSandersDelegates = 16;

            this.Elections.push(State);

            // Load Michigan
            State = new Election();
            State.ElectionName = "Michigan";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 130;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Mississippi
            State = new Election();
            State.ElectionName = "Mississippi";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 36;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Northern Mariana Islands
            State = new Election();
            State.ElectionName = "Northern Mariana Islands";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 6;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Florida
            State = new Election();
            State.ElectionName = "Florida";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 214;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Illinois
            State = new Election();
            State.ElectionName = "Illinois";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 156;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Missouri
            State = new Election();
            State.ElectionName = "Missouri";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 71;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load North Carolina
            State = new Election();
            State.ElectionName = "North Carolina";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 107;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Ohio
            State = new Election();
            State.ElectionName = "Ohio";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 143;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Arizona
            State = new Election();
            State.ElectionName = "Arizona";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 75;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Idaho
            State = new Election();
            State.ElectionName = "Idaho";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 23;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Utah
            State = new Election();
            State.ElectionName = "Utah";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 33;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Alaska
            State = new Election();
            State.ElectionName = "Alaska";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 16;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Hawaii
            State = new Election();
            State.ElectionName = "Hawaii";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 25;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Washington
            State = new Election();
            State.ElectionName = "Washington";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 101;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Wisconsin
            State = new Election();
            State.ElectionName = "Wisconsin";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 86;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Wyoming
            State = new Election();
            State.ElectionName = "Wyoming";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 14;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load New York
            State = new Election();
            State.ElectionName = "New York";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 247;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Connecticut
            State = new Election();
            State.ElectionName = "Connecticut";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 55;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Delaware
            State = new Election();
            State.ElectionName = "Delaware";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 21;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Maryland
            State = new Election();
            State.ElectionName = "Maryland";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 95;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Pennsylvania
            State = new Election();
            State.ElectionName = "Pennsylvania";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 189;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Rhode Island
            State = new Election();
            State.ElectionName = "Rhode Island";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 24;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Indiana
            State = new Election();
            State.ElectionName = "Indiana";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 83;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Guam
            State = new Election();
            State.ElectionName = "Guam";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 7;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load West Virginia
            State = new Election();
            State.ElectionName = "West Virginia";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 29;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Kentucky
            State = new Election();
            State.ElectionName = "Kentucky";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 55;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Oregon
            State = new Election();
            State.ElectionName = "Oregon";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 61;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Virgin Islands
            State = new Election();
            State.ElectionName = "Virgin Islands";
            State.Type = ElectionType.Caucus;
            State.TotalDelegates = 7;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Puerto Rico
            State = new Election();
            State.ElectionName = "Puerto Rico";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 60;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load California
            State = new Election();
            State.ElectionName = "California";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 475;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load Montana
            State = new Election();
            State.ElectionName = "Montana";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 21;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load New Jersey
            State = new Election();
            State.ElectionName = "New Jersey";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 126;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load New Mexico
            State = new Election();
            State.ElectionName = "New Mexico";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 34;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load North Dakota
            State = new Election();
            State.ElectionName = "North Dakota";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 18;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);

            // Load South Dakota
            State = new Election();
            State.ElectionName = "South Dakota";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 20;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);


            // Load District of Columbia
            State = new Election();
            State.ElectionName = "District of Columbia";
            State.Type = ElectionType.Primary;
            State.TotalDelegates = 20;
            State.TotalCongDistricts = 4;
            State.SubElections.push(se);
            this.Elections.push(State);
        }

        public DisplayElections() {

            for (let ed in this.Elections) {

                this.UpdateElection(ed, true);

            }
            this.DisplayTotals();

        }

        public winnerClass(clinton: number, sanders: number)
        {
            return (clinton == sanders ? "" : (clinton > sanders ? "Clinton-Win" :  "Sanders-Win"));
        }

        public DisplayTotals() {

            var ClintonDelegates: number = 0;
            var SandersDelegates: number = 0;
            var TotalDelegates: number = 0;

            var ClintonCommittedDelegates: number = 0;
            var SandersCommittedDelegates: number = 0;
            var TotalCommittedDelegates: number = 0;

            var ClintonProjectedDelegates: number = 0;
            var SandersProjectedDelegates: number = 0;
            var TotalProjectedDelegates: number = 0;

            for (let ed in this.Elections) {
                if (this.Elections[ed].ElectionLocked) {
                    ClintonDelegates += this.Elections[ed].ResultClintonDelegates;
                    ClintonCommittedDelegates += this.Elections[ed].ResultClintonDelegates;
                    SandersDelegates += this.Elections[ed].ResultSandersDelegates;
                    SandersCommittedDelegates += this.Elections[ed].ResultSandersDelegates;

                }
                else {
                    ClintonDelegates += this.Elections[ed].ProjectedClintonDelegates;
                    ClintonProjectedDelegates += this.Elections[ed].ProjectedClintonDelegates;
                    SandersDelegates += this.Elections[ed].ProjectedSandersDelegates;
                    SandersProjectedDelegates += this.Elections[ed].ProjectedSandersDelegates;

                }
                TotalDelegates += this.Elections[ed].TotalDelegates;
            }
            TotalCommittedDelegates = ClintonCommittedDelegates + SandersCommittedDelegates;
            TotalProjectedDelegates = ClintonProjectedDelegates + SandersProjectedDelegates;


            var TotalsCommittedSpread = document.getElementById("Row-Totals-Committed-Spread");
            var TotalsCommittedSpread = document.getElementById("Row-S-Totals-Committed-Spread");
            var TotalsProjectedSpread = document.getElementById("Row-Totals-Projected-Spread");
            var TotalsSpread = document.getElementById("Row-Totals-Spread")

            document.getElementById("Row-Totals-Committed-C").innerHTML = ClintonCommittedDelegates.toString();
            document.getElementById("Row-Totals-Committed-S").innerHTML = SandersCommittedDelegates.toString();
            document.getElementById("Row-Totals-Committed-A").innerHTML = TotalCommittedDelegates.toString();
            TotalsCommittedSpread.innerHTML = this.diff(ClintonCommittedDelegates, SandersCommittedDelegates);
            TotalsCommittedSpread.className = this.winnerClass(ClintonCommittedDelegates, SandersCommittedDelegates);


            document.getElementById("Row-S-Totals-Committed-C").innerHTML = ClintonCommittedDelegates.toString();
            document.getElementById("Row-S-Totals-Committed-S").innerHTML = SandersCommittedDelegates.toString();
            document.getElementById("Row-S-Totals-Committed-A").innerHTML = TotalCommittedDelegates.toString();
           // TotalsCommittedSpread.innerHTML = this.diff(ClintonCommittedDelegates, SandersCommittedDelegates);

            document.getElementById("Row-Totals-Projected-C").innerHTML = ClintonProjectedDelegates.toString();
            document.getElementById("Row-Totals-Projected-S").innerHTML = SandersProjectedDelegates.toString();
            document.getElementById("Row-Totals-Projected-A").innerHTML = TotalProjectedDelegates.toString();
            TotalsProjectedSpread.innerHTML = this.diff(ClintonProjectedDelegates, SandersProjectedDelegates);
            TotalsProjectedSpread.className = this.winnerClass(ClintonProjectedDelegates, SandersProjectedDelegates);

            document.getElementById("Row-Totals-C").innerHTML = ClintonDelegates.toString();
            document.getElementById("Row-Totals-S").innerHTML = SandersDelegates.toString();
            document.getElementById("Row-Totals-A").innerHTML = TotalDelegates.toString();
            TotalsSpread.innerHTML = this.diff(ClintonDelegates, SandersDelegates);
            TotalsSpread.className = this.winnerClass(ClintonDelegates, SandersDelegates);

            document.getElementById("Row-Totals2").className = this.winnerClass(ClintonDelegates, SandersDelegates);
            if (ClintonDelegates > SandersDelegates) {
                document.getElementById("Row-Totals-Winner").innerHTML = "Clinton Wins!";
            }
            else
            {
                document.getElementById("Row-Totals-Winner").innerHTML = "Sanders Wins!";
            }

        }

        public CalcElection(delegates: number, clintonVote: number, sandersVote: number) {

            var result: ElectionResult = new ElectionResult();

            if (sandersVote < 15) {
                result.ClintonDelegates = delegates;
                result.SandersDelegates = 0;
            }
            else if (clintonVote < 15) {
                result.SandersDelegates = delegates;
                result.ClintonDelegates = 0
            }
            else {
                var clintonDelegateResult: number = delegates * (clintonVote / 100);
                var sandersDelegateResult: number = delegates * (sandersVote / 100);

                result.ClintonDelegates = Math.floor(clintonDelegateResult);
                result.SandersDelegates = Math.floor(sandersDelegateResult);
                var leftOverDelegates = delegates - (result.ClintonDelegates + result.SandersDelegates)
                if (leftOverDelegates > 0) {
                    var remClintonVote: number = clintonDelegateResult - result.ClintonDelegates;
                    var remSandersVote: number = sandersDelegateResult - result.SandersDelegates;
                    if (remSandersVote == remClintonVote) {
                        //Tie = Coin flip
                        result.CoinToss = true;
                        if (Math.floor(Math.random() * 2) == 0)
                        { result.ClintonDelegates += leftOverDelegates }
                        else
                        { result.SandersDelegates += leftOverDelegates; }
                    }
                    else
                        if (remClintonVote > remSandersVote) {
                            //Clinton gets the extra delegate
                            result.ClintonDelegates += leftOverDelegates;
                        }
                        else {
                            //Sanders gets the extra delegate
                            result.SandersDelegates += leftOverDelegates;
                        }
                }

            }


            result.VoteWinner = ((clintonVote == sandersVote) ? 0 : (clintonVote < sandersVote ? 1 : 2));
            result.DelegateWinner = ((result.ClintonDelegates == result.SandersDelegates) ? 0 : (result.ClintonDelegates > result.SandersDelegates ? 1 : 2));


            return result;
        }

        public diff(c: number, s: number) {
            if (c == s) {
                return "0";
            }
            else {

                if (c > s) {
                    return "C +" + Math.abs(c - s).toString();
                }
                else {
                    return "S +" + Math.abs(c - s).toString();
                }
            }

        }

        public UpdateElection(ed: string, firstLoad: Boolean) {

            var Election = this.Elections[ed];
            var ClintonDelegateDiv = document.getElementById("Row-" + Election.ElectionName.replace(" ", "_").replace(" ", "_") + "-C");
            var SandersDelegateDiv = document.getElementById("Row-" + Election.ElectionName.replace(" ", "_").replace(" ", "_") + "-S");
            var SpreadDelegateDiv = document.getElementById("Row-" + Election.ElectionName.replace(" ", "_").replace(" ", "_") + "-Spread");
            var ProjectionDiv = document.getElementById("Row-" + Election.ElectionName.replace(" ", "_").replace(" ", "_") + "-Projection");
            var ProjectedSandersDelegates = document.getElementById("Row-" + Election.ElectionName.replace(" ", "_").replace(" ", "_") + "-Projection-S");
            var ProjectedClintonDelegates = document.getElementById("Row-" + Election.ElectionName.replace(" ", "_").replace(" ", "_") + "-Projection-C");


            if (this.Elections[ed].ElectionLocked) {
                ClintonDelegateDiv.innerHTML = Election.ResultClintonDelegates.toString();
                SandersDelegateDiv.innerHTML = Election.ResultSandersDelegates.toString();
                ProjectionDiv.innerHTML = ""
                SpreadDelegateDiv.innerHTML = this.diff(Election.ResultClintonDelegates, Election.ResultSandersDelegates);
                var electionResult: ElectionResult = new ElectionResult;

                if (Election.ResultClintonDelegates == Election.ResultSandersDelegates) {
                    electionResult.DelegateWinner = 0;
                }
                else if (Election.ResultClintonDelegates > Election.ResultSandersDelegates) {
                    electionResult.DelegateWinner = 1;
                }
                else {
                    electionResult.DelegateWinner = 2;
                }

                if (electionResult.DelegateWinner == 0 ? SpreadDelegateDiv.className = "" : (electionResult.DelegateWinner == 1 ? SpreadDelegateDiv.className = "Clinton-Win" : SpreadDelegateDiv.className = "Sanders-Win"));

            }
            else {
                var electionResult: ElectionResult = this.CalcElection(Election.TotalDelegates, Election.ProjectedClintonVotePercentage, Election.ProjectedSandersVotePercentage)

                Election.ProjectedSandersDelegates = electionResult.SandersDelegates;
                Election.ProjectedClintonDelegates = electionResult.ClintonDelegates;
                ClintonDelegateDiv.innerHTML = Election.ProjectedClintonDelegates.toString();
                SandersDelegateDiv.innerHTML = Election.ProjectedSandersDelegates.toString();
                if (firstLoad) {
                    ProjectionDiv.innerHTML = '<input type="range"  step=".01" value="' + Election.ProjectedSandersVotePercentage + '" oninput"ttt.ProjectStateDelegates(' + "'" + ed + "'" + ', this.value);" onchange="ttt.ProjectStateDelegates(' + "'" + ed + "'" + ', this.value);" > ';
                }
                ProjectedClintonDelegates.innerHTML = Election.ProjectedClintonVotePercentage.toFixed(3);
                ProjectedSandersDelegates.innerHTML = Election.ProjectedSandersVotePercentage.toFixed(3);
                SpreadDelegateDiv.innerHTML = this.diff(Election.ProjectedClintonDelegates, Election.ProjectedSandersDelegates);


                if (electionResult.VoteWinner == 0 ? "" : (electionResult.VoteWinner == 1 ? "Clinton Winner" : "Sanders Winner"));
                if (electionResult.DelegateWinner == 0 ? SpreadDelegateDiv.className = "" : (electionResult.DelegateWinner == 1 ? SpreadDelegateDiv.className = "Clinton-Win" : SpreadDelegateDiv.className = "Sanders-Win"));

            }

            if (!firstLoad) {
                this.applicationInsights.trackEvent("Projection", { State: this.Elections[ed].ElectionName }, { ProjectedClintonVotePercentage: this.Elections[ed].ProjectedClintonVotePercentage.toFixed(3), ProjectedSandersVotePercentage: this.Elections[ed].ProjectedSandersVotePercentage.toFixed(3), ProjectedClintonDelegates: this.Elections[ed].ProjectedClintonDelegates, ProjectedSandersDelegates: this.Elections[ed].ProjectedSandersDelegates });
            }

        }

        public ProjectStateDelegates(election: string, value: number) {



            this.Elections[election].ProjectedSandersVotePercentage = Number(value);
            this.Elections[election].ProjectedSandersDelegates = Math.round(this.Elections[election].TotalDelegates * (value / 100));

            this.Elections[election].ProjectedClintonVotePercentage = (100 - value);
            this.Elections[election].ProjectedClintonDelegates = Math.round(this.Elections[election].TotalDelegates * ((100 - value) / 100));

            this.UpdateElection(election, false);
            this.DisplayTotals();
        }

    }


    export class Election {

        public ElectionName: string;

        public Type: ElectionType;

        public TotalDelegates: number;

        public TotalCongDistricts: number;

        public ElectionLocked: boolean;

        public ResultClintonDelegates: number;

        public ResultSandersDelegates: number;

        public ResultClintonVotepercentage: number = 0;

        public ResultSandersVotepercentage: number = 0;

        public ProjectedClintonDelegates: number = 0;

        public ProjectedSandersDelegates: number = 0;

        public ProjectedClintonVotePercentage: number = 50;

        public ProjectedSandersVotePercentage: number = 50;

        public SubElections: Array<SubElection> = new Array<SubElection>();


    }

    export enum ElectionType {

        Caucus,

        Primary,
    }

    export class SubElection {

        public ElectionType: SubElectionType;

        public TotalDelegates: number;

        public CongressionalDistrict: number;
    }

    export class ElectionResult {
        public ClintonDelegates: number = 0;
        public SandersDelegates: number = 0;
        public VoteWinner: number = 0; // 0 = Tie, 1 = Clinton, 2 = Sanders
        public DelegateWinner: number = 0; // 0 = Tie, 1 = Clinton, 2 = Sanders
        public CoinToss: boolean = false;

    }

    export enum SubElectionType {

        CD = 3,

        AtLarge = 1,

        PLEO = 2,
    }
}


//class Greeter {
//    element: HTMLElement;
//    span: HTMLElement;
//    timerToken: number;

//    constructor(element: HTMLElement) {
//        this.element = element;
//        this.element.innerHTML += "The time is: ";
//        this.span = document.createElement('span');
//        this.element.appendChild(this.span);
//        this.span.innerText = new Date().toUTCString();
//    }

//    start() {
//        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
//    }

//    stop() {
//        clearTimeout(this.timerToken);
//    }

//}

var ttt = new TheRace.TheRace1();

window.onload = () => {
    //var el = document.getElementById('content');
    //var greeter = new Greeter(el);
    //greeter.start();

    ttt.LoadRace(document.getElementById('contentTheRace'));

};



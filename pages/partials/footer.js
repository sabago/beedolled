export default () => {
    return (
      <footer className="footer">
        <div style={{ marginTop: 20 }}>
          <a href="https://cosmicjs.com" target="_blank" style={{ textDecoration: 'none' }}>
            <img style={{ float:'left', marginRight: 15, position: 'relative' }} src="https://cosmicjs.com/images/logo.svg" width="28" height="28" />
            <span className="powered-by" style={{ position: 'relative', top: 4, color: '#333' }}>Proudly powered by Cosmic JS</span>
          </a>
        </div>
        <div className="copyright">
          &copy;&nbsp;&nbsp;{ new Date().getFullYear() } Cosmic JS
        </div>
      </footer>
    )
  }

//   function seriesDemo(req, res, next) {
//     const saveRequest = async() => {
//         const company = new Company({
//             name: 'FullStackhour'
//         });
//         const savedCompany = await company.save();
//         const job = new Job({
//             title: 'Node.js Developer',
//             _company: savedCompany._id
//         });
//         const savedJob = await job.save();
//         const application = new Application({
//             _job: savedJob._id,
//             _company: savedCompany._id
//         });
//         const savedApp = await application.save();
//         const licence = new Licence({
//             name: 'FREE',
//             _application: savedApp._id
//         });
//         const savedLic = await licence.save();
//         return {
//             company: savedCompany,
//             job: savedJob,
//             application: savedApp,
//             savedLic: licence
//         };
//     }
//     saveRequest()
//         .then(result => {
//             return res.json(result);
//         })
//         .catch(err => next(err));
// }


//   function seriesDemo(req, res, next) {
//     let rsp = {};
//     const tasks = [
//         function createCompany(cb) {
//             const company = new Company({
//                 name: 'FullStackhour'
//             });
//             company.save(function(err, savedCompany) {
//                 if (err) {
//                     return cb(err);
//                 }
//                 rsp.company = savedCompany;
//                 return cb(null, savedCompany);
//             });
//         },
//         function createJob(cb) {
//             const job = new Job({
//                 title: 'Node.js Developer',
//                 _company: rsp.company._id
//             });
//             job.save((err, savedJob) => {
//                 if (err) {
//                     return cb(err);
//                 }
//                 rsp.job = savedJob;
//                 return cb(null, savedJob);
//             })
//         },
//         function createApplication(cb) {
//             const application = new Application({
//                 _job: rsp.job._id,
//                 _company: rsp.company._id
//             });
//             application.save((err, savedApp) => {
//                 if (err) {
//                     return cb(err);
//                 }
//                 rsp.application = savedApp;
//                 return cb(null, savedApp);
//             })
//         },
//         function createLicence(cb) {
//             const licence = new Licence({
//                 name: 'FREE',
//                 _application: rsp.application._id
//             });
//             licence.save((err, savedLic) => {
//                 if (err) {
//                     return cb(err);
//                 }
//                 return cb(null, savedLic);
//             })
//         }
//     ];
//     async.series(tasks, (err, results) => {
//         if (err) {
//             return next(err);
//         }
//         return res.json(results);
//     })
// }

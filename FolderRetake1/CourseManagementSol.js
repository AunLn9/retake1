class CourseManagement{
   
// constructor()ให้ทำการสร้างตัวแปรcoursesให้มีค่าเริ่มต้นเป็น empty array []

    constructor(){
        this.courses=[]
    }

 // createCourse(courseId,courseTitle, courseTerm)ให้ทำการสร้างobjectของวิชาตามโครงสร้างข้อมูลที่กำหนดไว้ โดยให้รับพารามิเตอร์ courseId,courseTitle,courseTerm ถ้าผู้ใช้ไม่ส่งชื่อวิชา ให้กำหนดค่า defaultเป็น‘untitled’ และcourseTermเป็น‘2-2565’ สำหรับ registeredStudentsให้กำหนดค่าเริ่มต้นเป็นempty array จากนั้นให้เพิ่ม objectวิชา เข้าไปในcourses ให้ returnขนาด  arrayหลังเพิ่ม

 createCourse(id,courseTitle='untitled', courseTerm='2-2565'){
  return this.courses.push({
    courseId:id,
    courseTitle:courseTitle,
    courseTerm:courseTerm,
    registeredStudents:[]
  })

 }

    // registerCourseWithOneStudent(courseId,studentId)ให้ทำการเพิ่มรหัสนักศึกษาที่ต้องการลงทะเบียนเรียนในวิชานั้นเข้าไปที่ property registeredStudentsในวิชาที่มีรหัสวิชาที่ตรงกัน กรณีไม่พบวิชา ให้ return -1 กรณีพบวิชาและทำเพิ่มได้ให้ returnขนาดarrayหลังเพิ่ม

    registerCourseWithOneStudent(courseId,studentId){
        console.log(studentId)
        //not found
        const foundCourseIndex=this.findCourseIndex(courseId)
        if(foundCourseIndex===-1)
        return -1
        //found course
        return this.courses[foundCourseIndex].registeredStudents.push(studentId)
    }

    // registerCourseWithStudents(courseId,studentIds)ให้ทำการเพิ่มรหัสนักศึกษาทั้งหมดที่ต้องการลงทะเบียนเรียนในวิชานั้นเข้าไปที่property registeredStudentsในวิชาที่มีรหัสวิชาที่ตรงกัน กรณีไม่พบวิชา ให้ return -1 กรณีพบวิชาและทำเพิ่มได้ให้ returnขนาดarrayหลังเพิ่ม

    registerCourseWithStudents(courseId,studentIds){
        const foundCourseIndex=this.findCourseIndex(courseId)
        if(foundCourseIndex===-1)
        return -1
        //found course
        return this.courses[foundCourseIndex].registeredStudents.push(...studentIds)
    }
   
    //  ให้ทำการค้นหาและ return index ของตำแหน่งที่พบรหัสวิชาใน coursesถ้าไม่พบให้return-1
    findCourseIndex(courseId){
      return  this.courses.findIndex((course)=> course.courseId  ===  courseId )
    }
    //  ให้ทำการลบobjectวิชาที่ระบุในพารามิเตอร์ออกไปจากcoursesกรณีลบสำเร็จให้returncourseIdกรณีลบไม่สำเร็จให้return -1

    removeCourse(courseId){
        
        const foundCourseIndex=this.findCourseIndex(courseId)
        //not found
        if(foundCourseIndex===-1)
        return -1
        //found course
        // this.courses.filter((course)=>course.courseId!=courseId)
        this.courses.splice(foundCourseIndex,1)
        return courseId

    }
    // ให้return courses
    getCourses(){
        return this.courses
    }
}

const cm = new CourseManagement()
console.log(cm.createCourse('INT201', 'Client Side I', '1-2565')) //new length:1
console.log(cm.createCourse('INT203'))//new length:2
console.log(cm.findCourseIndex('INT203')) //index:1
console.log(cm.registerCourseWithOneStudent('INT201', 1001))//new length: 1
console.log(cm.registerCourseWithOneStudent('INT203', 1001))//new length: 1
console.log(cm.registerCourseWithOneStudent('INT203', 1002))//new length: 2
console.log(cm.registerCourseWithOneStudent('INT203', 1006))//new length: 3
console.log(cm.registerCourseWithOneStudent('INT202', 1002))//not found-1
console.log(cm.registerCourseWithStudents('INT201', [1003, 1005]))//new length: 3
console.log(cm.registerCourseWithStudents('INT202', [1003, 1005]))//not found-1
console.log(cm.removeCourse('INT202'))
console.log(cm.getCourses())
console.log(cm.removeCourse('INT203'))

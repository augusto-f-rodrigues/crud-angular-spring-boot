package com.augusto.crudspring.repository;

import com.augusto.crudspring.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {

}

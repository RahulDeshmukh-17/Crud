package com.curd.demo.Repositary;

import com.curd.demo.Modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}

package com.moolcalm.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.moolcalm.domain.CollectionVO;
import com.moolcalm.domain.InfoVO;
import com.moolcalm.service.ProductService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/products")
@AllArgsConstructor
public class ProductController {

	@Autowired
	ProductService service;

	// ��ü ��� ����
	// GET Mapping�� ����ϸ� �ȴ�
	// URL : http://localhost:8080/board/list �� �����ϸ� �Ʒ� ������ ǥ��
	@RequestMapping(value = "p_list", method = RequestMethod.GET)
	public void list(Model model) {
		log.info("list");
		// "�迭��", select�� �����
		model.addAttribute("list", service.getList());
	}

	@GetMapping("/p_detail")
	public void read(String p_setname, Model model) {
		log.info("read" + p_setname);
		// ����Ʈ ������ �ؾߵɶ��� �̷������� �� ��� �߰��ϸ� �˴ϴ�.?
		model.addAttribute("read", service.read(p_setname));
		model.addAttribute("readList", service.readList(p_setname));
		model.addAttribute("readProductCount", service.readProductCount(p_setname));
	}

	// ���� ���
//	@PostMapping("/buy")
//	public String buy(InfoVO email, ProductVO p_name, HttpServletRequest request) {
//		HttpSession session = request.getSession();
//		System.out.println(email);
//		if (session.getAttribute("ssn") != null) { // ssn�� null�� �ƴϸ�
//			email = (InfoVO) session.getAttribute("ssn");
//			log.info("���� ����: " + session + "," + email.getEmail() + "," + p_name.getP_name());
//			service.buy(email, p_name);
//			return "redirect:/products/p_list"; // mainȭ������ �̵�
//		} else {
//			return "redirect:/member/sessionLogin"; // null�̸� �ٽ� �α���ȭ������ �̵�
//		}
//	}
	
	@PostMapping("/buy")
	public String buy(String p_name, HttpServletRequest request, HttpServletResponse response, Model model) throws IOException, ServletException{
		// session�� �⺻������ HttpSevletRequest���� ���ƴٴϹǷ� �ű⼭ �����ͼ� ���¹���� ���� ������
		HttpSession session = request.getSession();
		// �̷��� �ϸ� �� ����
		System.out.println(session.getAttribute("ssn"));
		// ����� ���� ���ǿ� ���� �Ƚ�Ű�°� ���ƿ�
		
		//�˸�â ��� �غ�,,
        response.setContentType("text/html; charset=UTF-8");
        PrintWriter Alert = response.getWriter();
        
        // �α����� �Ǿ� ���� ��
		if(session.getAttribute("ssn") != null) {
			// Ÿ�� ������
			CollectionVO col = new CollectionVO();
			
			// ��Ʈ������ �������� �Ǵ�
			String email = ((InfoVO) session.getAttribute("ssn")).getEmail();
				
			// �־��ְ�
			col.setEmail(email);
			col.setP_name(p_name);
            
			// ��ǰ�� �ߺ����� ������
			if(service.product_check(col)!= 1) {
			
				log.info("���� ����");
				// ����, �����ϱ�
				service.buy(col);
				
				Alert.println("<script>alert('���� ����!')</script>");              
	              Alert.flush(); // �ʱ�ȭ
				// �׸��� ��ǰ�� ��� �� ��ǰ�� ������ �پ�߰���?
				// ����ٰ� ������ ������ ���ڳ׿� ������!
				
				// ���������� ������ ���̴� ����Ʈ��
				return "/products/p_list"; // �˸��� �����̷�Ʈ�� �浹�Ǳ⶧���� ���� ���� �ȵ˴ϴ� ������
			} else {
				log.info("�ߺ��Ǵ� ��ǰ �߰�");
				// �˸�â ����
	            Alert.println("<script>alert('�̹� �����Ͻ� ��ǰ�Դϴ�.')</script>");              
	              Alert.flush(); // �ʱ�ȭ

	              model.addAttribute("list", service.getList());
				return "products/p_list";
				// Alert�� @ResponseBody �߰� �� ���� ������
				/*String errmsg = "";
				errmsg = "<script>alert('�����Կ� �ߺ��Ǵ� ��ǰ�� �ֽ��ϴ�.');location.href='redirect:/products/p_detail'</script>";
				return errmsg;*/
				// ������ postMapping�̶� �ȸ�����?�ʹ�. �־ȵǴ��� �𸣰���;
			}
			

		}
		log.info("�α��� ���� �ϼ���");
		// �ƴϸ� �� �α��� â���� ������ �ǰ���?
		return "redirect:/member/sessionLogin";
		
	}
	
	// RestController�� ������ Controller�� �� �����ϰ� �ϸ� �� ������ſ���
	// ���߿� ���� ���� �ż����Դϴ� ����
	// �ϰ� �ȴٸ� ���� �˷��帱�Կ�
	// get, post, put, delete �� �޶󼭿�

}

package com.moolcalm.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.moolcalm.domain.CollectionVO;
import com.moolcalm.domain.ProductVO;
import com.moolcalm.mapper.ProductMapper;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Log4j
@Service
@Repository //???
@AllArgsConstructor
public class ProductServceImpl implements ProductService{
	@Autowired
	private ProductMapper mapper;
	
	//�����ϱ�	
	@Override
	public void buy(CollectionVO vo) {
		log.info("buy");
		System.out.println(vo.getEmail() + " : " + vo.getP_name());
		mapper.buy(vo);
	};
	
	// �����ߺ� Ȯ��
	public int product_check(CollectionVO vo) {
		log.info("product_check");
		return mapper.product_check(vo);
	}
	
	@Override
	//������ �������� ����
	public ProductVO read(String p_setname) {
		log.info("get"+p_setname);
		return mapper.read(p_setname);
	};
	
	@Override
	//������ ��� ����
	public List<ProductVO> getList(){
		log.info("getList");
		return mapper.getList();
	};
	//���������� ��ǰ ���� ����Ʈ ����
	public List<ProductVO> readList(String p_setname){
		log.info("readList");
		return mapper.readList(p_setname);
	}
	@Override
	//��ǰ ������ �� ��ǰ�� �� ����
	public ProductVO readProductCount(String p_setname) {
		log.info("readProductCount");
		return mapper.readProductCount(p_setname);
	};

	
}

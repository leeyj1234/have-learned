package com.moolcalm.mapper;

import java.util.List;

import com.moolcalm.domain.CollectionVO;
import com.moolcalm.domain.ProductVO;

public interface ProductMapper {
	public List<ProductVO> getList();
	//public void buy(InfoVO email, ProductVO p_name);
	
	void buy(CollectionVO vo); // �Ķ���Ͱ� ���� ������ �ϰ�� Ÿ���� �����ϰ� �Ѱ��� �Ķ���ͷ� �־��
	// �� �� �׸��� interface��  public �Ƚᵵ �⺻�� public �Դϴ�
	
	public int product_check(CollectionVO vo);    //��ǰ���� �ߺ� Ȯ�� 
	
	public ProductVO read(String p_setname);
	public List<ProductVO> readList(String p_setname);
	public ProductVO readProductCount(String p_setname);
}

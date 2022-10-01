package com.moolcalm.service;

import java.util.List;

import com.moolcalm.domain.CollectionVO;
import com.moolcalm.domain.ProductVO;

public interface ProductService {
		//�����ϱ�
		public void buy(CollectionVO vo);
		
		//��ǰ���� �ߺ�Ȯ��
		public int product_check(CollectionVO vo);
		
		//��ǰ ��ϸ���Ʈ(��������)
		public ProductVO read(String p_setname);
		//��ǰ ��ϸ���Ʈ(���������)
		public List<ProductVO> getList();
		//��ǰ ���� ����Ʈ(��������)
		public List<ProductVO> readList(String p_setname);
		//��ǰ ������ �� ��ǰ�� �� ����,�Ѱ���,��������
		public ProductVO readProductCount(String p_setname);
}
